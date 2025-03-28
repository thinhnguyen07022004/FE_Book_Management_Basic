import { Link, useRouteError } from "react-router-dom";
import React from 'react';
import { Button, Result } from 'antd';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <Result
            status="404"
            title="Oops!"
            subTitle={error.statusText || error.message}
            extra={<Button type="primary">
                <Link to="/">
                    <span>
                        Back to Home
                    </span>
                </Link>
            </Button>}
        />
    );
}
