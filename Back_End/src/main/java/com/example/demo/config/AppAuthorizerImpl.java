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
        // String menuCode = securedPath.substring(1);//Bỏ dấu "/" ở đầu Path
        // boolean isAllow = false;
        try {
            UsernamePasswordAuthenticationToken user = (UsernamePasswordAuthenticationToken) authentication;
            if (user==null){
                return false;
            }
            UserDetails userDetails = (UserDetails)user.getPrincipal();
            if (userDetails==null) {
                return false;
            }
            //Truy vấn vào CSDL theo userId + menuCode + action
            //Nếu có quyền thì
            GrantedAuthority role = userDetails.getAuthorities().iterator().next();
            logger.info(callerObj.getClass().getSimpleName());
            if(role.getAuthority().equals("4")) return true;

            List<String> role_waiter = new ArrayList<String>() { 
                { 
                    add("FoodController"); 
                    add("FoodDetailController"); 
                    add("HoadonBanController"); 
                    add("InvoiceController"); 
                    add("InvoiceDetailController"); 
                    add("InvoiceStaffController"); 
                    add("NoticeController"); 
                    add("TableController"); 
                } 
            }; 

            List<String> role_cashier = new ArrayList<String>() { 
                { 
                    //add("FoodController"); 
                    //add("FoodDetailController"); 
                    add("HoadonBanController"); 
                    add("InvoiceController"); 
                    add("InvoiceDetailController"); 
                    //add("InvoiceStaffController"); 
                    //add("NoticeController"); 
                    add("TableController"); 
                } 
            }; 

            List<String> role_chef = new ArrayList<String>() { 
                { 
                    //add("FoodController"); 
                    //add("FoodDetailController"); 
                    //add("HoadonBanController"); 
                    //add("InvoiceController"); 
                    add("InvoiceDetailController"); 
                    //add("InvoiceStaffController"); 
                    add("NoticeController"); 
                    //add("TableController"); 
                } 
            }; 
            
            switch (role.getAuthority()) {
                case "1":
                    if(role_waiter.contains(callerObj.getClass().getSimpleName()))
                        return true;
                    return false;

                case "2":
                    if(role_cashier.contains(callerObj.getClass().getSimpleName()))
                        return true;
                    return false;

                case "3":
                    if(role_chef.contains(callerObj.getClass().getSimpleName()))
                        return true;
                    return false;
                default:
                    return false;
            }

        } catch (Exception e) {
            logger.error(e.toString(), e);
            throw e;
        }
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