package com.example.demo.config;

import com.example.demo.model.NhanVien;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Date;
import java.util.function.Function;

import static com.example.demo.model.Constants.ACCESS_TOKEN_VALIDITY_SECONDS;
import static com.example.demo.model.Constants.SIGNING_KEY;

@Component
public class JwtTokenUtil implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public String getUsernameFromToken(final String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    public int GetRoleFromToken(final String token) {
        return Jwts.parser()
                .setSigningKey(SIGNING_KEY)
                .parseClaimsJws(token)
                .getBody()
                .get("role", Integer.class);
    }

    public Date getExpirationDateFromToken(final String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    public <T> T getClaimFromToken(final String token, final Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    private Claims getAllClaimsFromToken(final String token) {
        return Jwts.parser()
                .setSigningKey(SIGNING_KEY)
                .parseClaimsJws(token)
                .getBody();
    }

    private Boolean isTokenExpired(final String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    public String generateToken(final NhanVien nhanvien) {
        return doGenerateToken(nhanvien.getUsername(),nhanvien.getLoai());
    }

    private String doGenerateToken(final String subject, final int loainv) {

        final Claims claims = Jwts.claims().setSubject(subject);
        claims.put("role", loainv);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuer("issuer")
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + ACCESS_TOKEN_VALIDITY_SECONDS*1000))
                .signWith(SignatureAlgorithm.HS256, SIGNING_KEY)
                .compact();
    }

    public Boolean validateToken(final String token, final UserDetails userDetails) {
        final String username = getUsernameFromToken(token);
        return (
              username.equals(userDetails.getUsername())
                    && !isTokenExpired(token));
    }

}
