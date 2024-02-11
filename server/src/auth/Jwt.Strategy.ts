import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwksClient } from 'jwks-rsa';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {


  constructor() {
    
  const jwksUri = `https://dev-2y3tbv5hpmy6dms1.us.auth0.com/.well-known/jwks.json`;
  const jwksClient = new JwksClient({ jwksUri });

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      audience: 'Projet-Orthographe Nest React',
      issuer: `https://dev-2y3tbv5hpmy6dms1.us.auth0.com/`,
      algorithms: ['RS256'],
      secretOrKeyProvider: (request, rawJwtToken, done) => {
        jwksClient.getSigningKey(rawJwtToken.header.kid, (err, key) => {
          if (err) {
            done(err, null);
            return;
          }
          // Correction ici
          const signingKey = key.getPublicKey ? key.getPublicKey() : null;
          done(null, signingKey);
        });
      },
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.name };
  }
}
