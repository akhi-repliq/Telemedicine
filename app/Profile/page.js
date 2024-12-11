'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useEffect } from "react"


export default function Profile() {
    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (!currentUser) {
            router.push('/Profile');
        } else {
            const { password, ...userData } = currentUser;
            setUser(userData);
        }
    }, [router]);
    const logout = () => {
        localStorage.removeItem('currentUser')
        router.push('/')
    }
    return <> <h1>This is the profile page</h1>
        <button onClick={logout}><p>Logout</p></button>
    </>
}