import { useEffect } from "react"



export function foo({a}) {

    useEffect(() => {
        a
    }, [])
    // ^^ error here because react plugin is enabled in this config
}