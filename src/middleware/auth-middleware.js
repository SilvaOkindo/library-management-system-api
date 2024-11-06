import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  let token;
  const authHeaders = req.headers.authorization || req.headers.Authorization;
  console.log(authHeaders);

  if (authHeaders && authHeaders.startsWith("Bearer")) {
    token = authHeaders.split(" ")[1];
  }

  console.log(token, "token");

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "No  token, authorization needed.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// verifying authorization

export const verifyAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (
      req.user.role === "admin" ||
      req.user.role === "user" ||
      req.user.role === "manager" ||
      req.user.role === "author"
    ) {
      next();
    } else {
      res.status(400).json({
        success: false,
        message: "Not authorized",
      });
    }
  });
};


export const verifyAdmins = (req, res, next) => {
    verifyToken(req, res, () => {
      if (
        req.user.role === "admin"
      ) {
        next();
      } else {
        res.status(400).json({
          success: false,
          message: "Not authorized",
        });
      }
    });
  };

  export const verifyManagers = (req, res, next) => {
    verifyToken(req, res, () => {
      if (
        req.user.role === "admin" ||
        req.user.role === "manager"
      ) {
        next();
      } else {
        res.status(400).json({
          success: false,
          message: "Not authorized",
        });
      }
    });
  };

  export const verifyAuthors = (req, res, next) => {
    verifyToken(req, res, () => {
      if (
        req.user.role === "admin" ||
        req.user.role === "author"
      ) {
        next();
      } else {
        res.status(400).json({
          success: false,
          message: "Not authorized",
        });
      }
    });
  };

  export const verifyUsers = (req, res, next) => {
    verifyToken(req, res, () => {
      if (
        req.user.role === "admin" ||
        req.user.role === "user" ||
        req.user.role === "manager"
      ) {
        next();
      } else {
        res.status(400).json({
          success: false,
          message: "Not authorized",
        });
      }
    });
  };
  
  
  
  