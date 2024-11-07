import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>

    <button className="bg-sky-500 px-3 py-2">
      <a href="https://faztweb.com">Enviar correo</a>
    </button>
  </div>
);