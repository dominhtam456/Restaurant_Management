package com.example.demo.config;

import java.lang.annotation.Annotation;
import java.util.Optional;
import org.jboss.logging.Logger;

import org.hibernate.annotations.common.util.impl.LoggerFactory;
import org.springframework.core.ResolvableType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.*;

@Service("appAuthorizer")
public class AppAuthorizerImpl implements AppAuthorizer{
    private final Logger logger = LoggerFactory.logger(AppAuthorizerImpl.class);

    @Override
    public boolean authorize(Authentication authentication, String action, Object callerObj) {
        String securedPath = extractSecuredPath(callerObj);
        if (securedPath==null || "".equals(securedPath.trim())) {//login, logout
            return true;
        }
        String menuCode = securedPath.substring(1);//Bỏ dấu "/" ở đầu Path
        boolean isAllow = false;
        try {
            UsernamePasswordAuthenticationToken user = (UsernamePasswordAuthenticationToken) authentication;
            if (user==null){
                return isAllow;
            }
            UserDetails userDetails = (UserDetails)user.getPrincipal();
            if (userDetails==null) {
                return isAllow;
            }
            //Truy vấn vào CSDL theo userId + menuCode + action
            //Nếu có quyền thì
            GrantedAuthority role = userDetails.getAuthorities().iterator().next();
            logger.info(callerObj.getClass().getName());
            logger.info(callerObj.getClass().getSimpleName());
            logger.info(callerObj.getClass().getCanonicalName());
            if(role.getAuthority().equals("4")) return true;
            
            


            // {
            //     isAllow = true;
            // }
        } catch (Exception e) {
            logger.error(e.toString(), e);
            throw e;
        }
        return false;
    }

    // Lay ra securedPath duoc Annotate RequestMapping trong Controller
    private String extractSecuredPath(Object callerObj) {
        Class<?> clazz = ResolvableType.forClass(callerObj.getClass()).getRawClass();
        Optional<Annotation> annotation = Arrays.asList(clazz.getAnnotations()).stream().filter((ann) -> {
            return ann instanceof RequestMapping;
        }).findFirst();
        //logger.debug("FOUND CALLER CLASS: {}", ResolvableType.forClass(callerObj.getClass()).getType().getTypeName());
        if (annotation.isPresent()) {
            return ((RequestMapping) annotation.get()).value()[0];
        }
        return null;
    }
}