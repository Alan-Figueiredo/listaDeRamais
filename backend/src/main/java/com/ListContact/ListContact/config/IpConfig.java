package com.ListContact.ListContact.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.net.InetAddress;
import java.net.UnknownHostException;

@Configuration
public class IpConfig {

    @Bean
    public String localIpAddress() {

        try {
            return InetAddress.getLocalHost().getHostAddress();
        } catch (UnknownHostException e) {
            throw new RuntimeException("Falha ao acessar o IP local "+e);
        }

    }
}
