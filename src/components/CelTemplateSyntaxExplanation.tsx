import React from "react";

const CelTemplateSyntaxExplanation = () => {
	const templateSyntax = "${}";

	return (
		<>
			<p>
				Variables, macros, and expressions can be interpolated into your
				policy's <code>config</code> using ngrok's <code>{templateSyntax}</code>{" "}
				cel expression templating syntax.{" "}
				<em>
					For a complete list and more detailed explanation checkout the docs on{" "}
					<a href="/docs/http/traffic-policy/expressions/"> cel expressions.</a>
				</em>
			</p>
		</>
	);
};

export default CelTemplateSyntaxExplanation;
