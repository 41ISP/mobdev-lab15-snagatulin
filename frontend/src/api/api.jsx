import { useUserStore } from "../store/store"

export const registerUser = async (user) => {
    try {
        const req = await fetch(
            "https://kitek.ktkv.dev/marketplace/api/auth/register",
            {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        const res = await req.json()
        if (!res.success) {
            throw new Error(res.error)
        }
        return res
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

export const loginUser = async (user) => {
    try {
        const req = await fetch(
            "https://kitek.ktkv.dev/marketplace/api/auth/login",
            {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        const res = await req.json()
        if (!res.success) {
            throw new Error(res.error)
        }
        return res
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

export const getSpisok = async () => {
    try {
        const req = await fetch("https://kitek.ktkv.dev/marketplace/api/items")
        const res = await req.json()
        console.log(res)
        return res
    } catch (err) {
        console.error(err)
    }
}

export const RealUser = async () => {
  try {
    const { jwt } = useUserStore.getState();
    const req = await fetch(
      "https://kitek.ktkv.dev/marketplace/api/auth/me",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + jwt.token,
        },
      }
    );
    const data = await req.json();
    console.log("Данные пользователя:", data);
    return data; 
  } catch (err) {
    console.error(err);
    return null; 
  }
};

 export const CreateTovar = async (item) => {
  const { jwt } = useUserStore.getState();
  const req = await fetch("https://kitek.ktkv.dev/marketplace/api/items", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + jwt.token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  const res = await req.json();
  return res;
};

export const StavkiNaTovar = async (id) => {
  try {
    const req = await fetch(
      "https://kitek.ktkv.dev/marketplace/api/items/${id}/bids");
    const data = await req.json();
    console.log("Данные ставки на товар:", data);
    return data; 
  } catch (err) {
    console.error(err);
    return null; 
  }
};

export const DeleteTovar = async () => {
  try {
    const req = await fetch(
      "https://kitek.ktkv.dev/marketplace/api/items/:id",
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + jwt.token,
        },
      }
    );
    const data = await req.json();
    return data; 
  } catch (err) {
    console.error(err);
    return null; 
  }
};