import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../error";
import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirebaseConfig } from "../config/options";
import { getAuth } from "firebase-admin/auth";

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearerToken = req.headers["authorization"];
  getApps().length === 0 ? initializeApp(getFirebaseConfig()) : getApp();

  if (!bearerToken) {
    res.status(403).json(new UnauthorizedError().throwMessage());

    return;
  }

  const token = bearerToken.split(" ")[1];

  if (!token) {
    res.status(403).json(new UnauthorizedError().throwMessage());

    return;
  }

  const isAuthorized = await getAuth().verifyIdToken(token, true);

  if (!isAuthorized) {
    res.status(403).json(new UnauthorizedError().throwMessage());

    return;
  }

  next();
};
