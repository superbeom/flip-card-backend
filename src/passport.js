require("dotenv").config();
import { prisma } from "../generated/prisma-client";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: `D49NoC(|b,qBdqc6.!bGY'9h2eI_Zxi=QT+O7-%>2k~(5hB"om|sFvsnB5d4IN>+c*DLDNL2DLdl_--2_1$%@3421#$`,
};

const verifyUser = async (payload, done) => {
  try {
    const user = await prisma.user({ id: payload.id });
    if (user !== null) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};

export const authenticateJwt = (req, res, next) =>
  passport.authenticate("jwt", { session: false }, (error, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);

passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();
