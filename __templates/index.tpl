<mjml>
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
<!-- PREHEADER -->
      {{> empty-section}}
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
<!-- tag line -->
          <mj-table class="body-table body-table-upper">
            <tr class="body-tr">
              <td class="body-td body-td-upper body-td-empty">&nbsp;</td>
              <td class="body-td body-td-upper body-td-content as-vertically-centered">
                {{> title}}
              </td>
              <td class="body-td body-td-upper body-td-empty">&nbsp;</td>

            </tr>
          </mj-table>

<!-- actual content -->
          <mj-table class="body-table body-table-lower">
            <tr class="body-tr">
              <td class="body-td body-td-lower body-td-empty">&nbsp;</td>
              <td class="body-td body-td-lower body-td-content">
                {{> content}}
              </td>
              <td class="body-td body-td-lower body-td-empty">&nbsp;</td>
            </tr>
          </mj-table>

<!-- call to action -->
          <mj-table class="body-table body-table-lower">
            <tr class="body-tr">
              <td class="body-td body-td-lower body-td-empty">&nbsp;</td>
              <td class="body-td body-td-lower body-td-content">
                  \{{#unless hideCTA}}
                   {{> button}}
                  \{{/unless}}
                  {{> prefooter}}
              </td>
              <td class="body-td body-td-lower body-td-empty">&nbsp;</td>
            </tr>
          </mj-table>

        </mj-column>
      </mj-section>

<!-- FOOTER -->
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
      <!--
      <mj-raw>
          <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300italic,400,700|Vollkorn:400,400italic' rel='stylesheet' type='text/css'>
      </mj-raw>
      -->
      {{> tracker}}
    </mj-container>
  </mj-body>
</mjml>
