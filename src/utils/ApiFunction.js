import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8081/DiamondShop",
  withCredentials: true,
});

//===================================================LOGIN=========================================================

export async function loginUser(login) {
  try {
    const response = await api.post("/diamond-shop/login", login);
    return response;
  } catch (error) {
    return null;
  }
}

export async function createNewAccount(account) {
  try {
    const response = await api.post("/diamond-shop/signup", account);
    return response;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      return {
        success: false,
        status: error.response.status,
        message: error.response.data?.message || "An error occurred",
      };
    } else {
      // Network error or other issue
      return { success: false, message: error.message || "Network error" };
    }
  }
}

export async function verifyAccount(code) {
  try {
    const response = await api.get(
      `/diamond-shop/verify?code=${encodeURIComponent(code)}`
    );
    return response;
  } catch (error) {
    console.error("Verification error:", error); // Log the error for debugging
    return null; // Return the error response
  }
}

export const validateToken = async () => {
  const token = localStorage.getItem("token");

  if (token !== null && token.length > 0) {
    try {
      // Send the token as a query parameter
      const result = await api.post(`/diamond-shop/token`);
      return result;
    } catch (error) {
      const result = await api.post(`/diamond-shop/token`);
      return result;
    }
  }
};

// Function to refresh the token
const refreshToken = async () => {
  try {
    const id = localStorage.getItem("userId");
    if (id !== null && id > 0) {
      const formData = new FormData();
      formData.append("id", id);
      const response = await api.post("/diamond-shop/token/refresh", formData);
      return response.data;
    }
  } catch (error) {
    console.log("Error", error);
  }
};

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token !== null && token.length > 0) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      localStorage.clear();
      window.location.href = "/login";
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const resp = await refreshToken();

        if (resp.token) {
          const access_token = resp.token;
          localStorage.setItem("token", access_token);
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${access_token}`;
          // Retry the original request with the new token
          return api(originalRequest);
        } else {
          return Promise.reject(error); // Reject the promise to avoid further processing
        }
      } catch (refreshError) {
        // If refreshToken() fails, redirect to login
        window.location.href = "/login"; // Redirect to login page
        return Promise.reject(error); // Reject the promise to avoid further processing
      }
    }

    return Promise.reject(error);
  }
);

//===================================================Customer=========================================================

export const getCustomerById = async () => {
  try {
    const id = localStorage.getItem("userId");
    if (id !== null && id > 0 && id.length > 0) {
      const formData = new FormData();
      formData.append("id", id);
      const response = await api.post(
        "/diamond-shop/customer/information",
        formData
      );
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const forgotPassword = async (email) => {
  try {
    const formData = new FormData();
    formData.append("email", email);
    const response = await api.post("/diamond-shop/forgot-password", formData);
    return response;
  } catch (error) {
    return null;
  }
};

export const resetPassword = async (code, password) => {
  try {
    const formData = new FormData();
    formData.append("code", code);
    formData.append("password", password);
    const response = await api.post("/diamond-shop/reset-password", formData);
    return response;
  } catch (error) {
    return null;
  }
};

export const updateAccount = async (customer) => {
  try {
    const response = await api.put("/diamond-shop/customer/update", customer);
    return response;
  } catch (error) {
    return null;
  }
};

export const loginGoogleAccount = async (code) => {
  try {
    const response = await api.get(`/diamond-shop/google/token?code=${code}`);
    return response;
  } catch (error) {
    return null;
  }
};

//===================================================CheckOut=========================================================

export const getAllServices = async () => {
  try {
    const response = await api.get("/services/all");
    return response;
  } catch (error) {
    return null;
  }
};

export const placeOrderDiamond = async (cart) => {
  try {
    const checkOutRequest = {
      payment_method: cart.paymentMethod,
      service_name: cart.serviceSelected,
      date: cart.selectedDate,
    };
    const response = await api.post("/api/check-out", checkOutRequest);
    return response;
  } catch (error) {
    return null;
  }
};

export const createPayment = async (total) => {
  try {
    const formData = new FormData();
    formData.append("total", total);
    const response = await api.post("/api/pay", formData);
    return response;
  } catch (error) {
    return null;
  }
};

export const processPayment = async (paymentId, PayerID, cart) => {
  try {
    const checkOutRequest = {
      payment_method: cart.paymentMethod,
      service_name: cart.serviceSelected,
      date: cart.selectedDate,
    };
    const response = await api.post(
      `api/pay/validate?paymentId=${paymentId}&PayerID=${PayerID}`,
      checkOutRequest
    );
    return response;
  } catch (error) {
    return null;
  }
};

// ========================================= LOOKUP ====================================== //
export const getCertificateByCode = async (code) => {
  try {
    const response = await api.get(
      `/diamond-certificate/certificate/code/${code}`
    );
    return response;
  } catch (error) {
    return null;
  }
};

// ======================================== REQUEST ======================================= //
export const getAllRequest = async () => {
  try {
    const response = await api.get(`diamond-request/all`);
    return response;
  } catch (error) {
    return null;
  }
};

export const getCertificateById = async (id) => {
  try {
    const response = await api.get(`diamond-certificate/certificate/${id}`);
    return response;
  } catch (error) {
    return null;
  }
};
