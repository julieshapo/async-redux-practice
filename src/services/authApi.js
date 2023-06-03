const BASE_URL = "https://647855a4362560649a2d9138.mockapi.io/api/v1";

export const sighUp = async (user) => {
  try {
    const res = await fetch(`${BASE_URL}/async-redux-auth`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
