\{{#if subject}}\{{subject}}\{{else}}Poscat\{{/if}}
--------

\{{#stripHTML}}
\{{{preheader}}}
\{{/stripHTML}}
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

{{> text-ctrls}}

---------
{{> text-footer-common}}
{{> text-footer-extra}}

---------
\{{urlPoscat}}
