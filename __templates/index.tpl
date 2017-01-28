<mjml>
<mj-head>
	<mj-title>\{{#if subject}}\{{subject}}\{{else}}Poscat\{{/if}}</mj-title>
</mj-head>
<mj-body class="body body-v1">
<mj-container class="mj-container {{theme}} {{#if isDark}}{{theme}}--dark{{/if}}">


<mj-raw>
  {{> ld-json}}
  <!-- smoosh -->
  <link href="../../styles/poscat-emails.css" rel="stylesheet">
  <!-- endsmoosh -->
  <link
    href='https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300italic,400,700|Vollkorn:400,400italic'
    rel='stylesheet'
    type='text/css'
  >
</mj-raw>

{{> empty-section}}

<!-- PREHEADER -->
<mj-section class="mj-section preheader-section">
	<mj-column class="mj-column preheader-column is-full-width">{{> preheader}}</mj-column>
</mj-section>

<!-- BRAND HEADER -->
<mj-section class="mj-section header-section">
	<mj-column class="mj-column header-column is-full-width">
		{{> main-header}}
	</mj-column>
</mj-section>

<!-- BODY -->
<mj-section class="mj-section body-section main">
  <mj-column class="mj-column body-column">
		<!-- actual content -->
		{{> body-header}}
		{{> body-content}}
		{{> body-cta}}
		{{> body-extensive-ui}}
		<!-- end of content -->
	</mj-column>
</mj-section>

<!-- FOOTERS -->
<mj-section class="mj-section body-section footer">
	<mj-column class="mj-column body-column body-column-footer">
		{{> footer-common}}
	</mj-column>
</mj-section>
<mj-section class="mj-section body-section footer">
	<mj-column class="mj-column body-column body-column-footer">
		{{> footer-extra}}
	</mj-column>
</mj-section>

{{> empty-section}}
{{> tracker}}

</mj-container>
</mj-body>
</mjml>
