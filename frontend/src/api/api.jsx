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

export const RealUser = async() => {
    try {
        const { jwt } = useUserStore.getState()
        const req = await fetch(
            "https://kitek.ktkv.dev/marketplace/api/auth/me",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + jwt.token,
                },
            }
        )
        console.log(await req.json())
    } catch (err) {
        console.error(err)
    }
}