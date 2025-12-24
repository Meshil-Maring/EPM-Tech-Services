export const checkAuth = async () => {
  try {
    const res = await fetch(`${server_url}/api/check-auth`, {
      credentials: "include",
    });

    if (!res.ok) {
      return { status: res.status, message: "Not authenticated" };
    }

    return { status: 200, message: "User is authenticated" };
  } catch (error) {
    return { status: 500, message: "Server error" };
  }
};
