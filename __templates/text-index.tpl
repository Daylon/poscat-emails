\{{#if subject}}\{{subject}}\{{else}}Poscat\{{/if}}
--------
--------

\{{{preheader}}}

{{> text-main-header}}
----
{{> text-title}}
----
{{> content}}

\{{#unless hideCTA}}
|		----
|		\{{callToAction}}:
|		\{{ctaHref}}
\{{/unless}}
{{#if _d.hasPrefooter}}
|		----
|		\{{{prefooterMessage}}}{{#if _d.isPrefooterALink}}:
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
