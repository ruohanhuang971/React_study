interface ErrorMessageProp {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProp) => {
    return (
        <p className="error">
            <span>📛</span> {message}
        </p>
    );
};

export default ErrorMessage;
