\{{{preheader}}}
―

¶
{{> text-title}}

\{{{content}}}



\{{#unless hideCTA}}
―
👉	\{{callToAction}}:
		\{{ctaHref}}
\{{/unless}}
{{#if _d.hasExtensiveUI}}
―
📦	\{{rhythm.next}} — \{{rhythm.editlabel}}:
		\{{rhythm.edit}}
{{/if}}

{{> text-ctrls}}

―
{{> text-footer-common}}
{{> text-footer-extra}}



―
🐈 \{{urlPoscat}}

"\{{#if subject}}\{{subject}}\{{else}}Poscat\{{/if}}"
