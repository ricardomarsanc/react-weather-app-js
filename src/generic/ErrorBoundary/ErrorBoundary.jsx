import React, { PureComponent } from "react";

class ErrorBoundary extends PureComponent {
    
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    // Función propietaria, actualiza el estado
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo){
        console.log("ErrorInfo: ", errorInfo)
    }

    render() {
        return (
            this.state.hasError ? 
            (<h1>Hubo un error</h1>)
            :
            (this.props.children)
        )
    }
}

export default ErrorBoundary