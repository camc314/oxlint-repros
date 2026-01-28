import { useEffect } from "react"



export function foo({a}) {

    useEffect(() => {
        a
    }, [a])
    // no error here because this has no config, and react plugin isn't enabled
}