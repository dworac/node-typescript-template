import passport from 'passport';
import passportJWT from 'passport-jwt';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
	new JWTStrategy(
		{
			jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
			secretOrKey: 'secret',
		},
		(jwtPayload, cb) => {
			// find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
			// return UserModel.findOneById(jwtPayload.id)
			// 	.then((user) => {
			// 		return cb(null, user);
			// 	})
			// 	.catch((err) => {
			// 		return cb(err);
			// 	});
			return cb(null, jwtPayload);
		},
	),
);
