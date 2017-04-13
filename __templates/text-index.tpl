\{{#if subject}}\{{subject}}\{{else}}Poscat\{{/if}}
--------
--------
\{{#stripHTML}}
\{{{preheader}}}
\{{/stripHTML}}

{{> text-main-header}}
----
{{> text-title}}
----
\{{#stripHTML}}{{{content}}}\{{/stripHTML}}

\{{#unless hideCTA}}
|		----
|		\{{callToAction}}:
|		\{{ctaHref}}
\{{/unless}}
{{#if _d.hasPrefooter}}
|		----
|		\{{#stripHTML}}\{{{prefooterMessage}}}\{{/stripHTML}}{{#if _d.isPrefooterALink}}:
|		\{{prefooterLink}}{{/if}}
{{/if}}
{{#if _d.hasExtensiveUI}}
|		----
|		\{{rhythm.next}} — \{{rhythm.editlabel}}:
|		\{{rhythm.edit}}
{{/if}}

---------
{{> text-footer-common}}
{{> text-footer-extra}}

---------
\{{urlPoscat}}
