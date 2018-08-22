# Poscat Emails

[![Greenkeeper badge](https://badges.greenkeeper.io/Daylon/poscat-emails.svg?token=1560a645fdaf0e91e6e408a1122061a2027b25f3459e9d490306f0f47eb83ac9&ts=1500882263987)](https://greenkeeper.io/)

Gulp pipeline for Poscat email-based messaging. Manage themes and layout; uses MJML and prepares templates for production.
Based on [HBS/MJML seed](https://github.com/Daylon/hbs-mjml-seed).

![Output examples for Poscat Emails](https://github.com/Daylon/poscat-emails/blob/master/poscat-emails%401x.png)

## Usage

```sh
git clone https://github.com/Daylon/poscat-emails.git
cd poscat-emails
gulp
```

This pipeline use `MJML` for custom email markup, `Handlebars` for templating and `SASS` for styling. Please refer to their own documentation and/or repo for help:
- [mjml.io](https://mjml.io/);
- [HandlebarsJS](http://handlebarsjs.com/);
- [Sass](http://sass-lang.com/).

## Output

Poscat emails have one color theme per message type —e.g. one color for subscription, one for reads, one for pause feedback, etc. Each of them have then two variants: one default bright theme and a dark one, triggered by user preferences.

## Templating

### Why using MJML?

Emailing is a complicated, black-magic version of the web. We cannot easily guarantee readability and/or acceptable layouts across devices and clients —Markups like MJML are here to lift a major part of the weight.

## Let's keep MJML and CSS separated, shall we?

### Rationale

The same way that making HTML for email can be tedious, having to tweak CSS rules attributes by hand can be cumbersome as well. For these reasons, I didn't want to regress from my previous setup _but_ MJML is pretty much the only solution (at the time of this writing) to provide a markup capable of removing noise from your HMTL templates.

To achieve this, this pipeline leverages a fork from the fantastic lib `inline-css` by (and, in the process, `gulp-inline-css`; same author). [Here's the pull request, if you wish to weigh in](https://github.com/jonkemp/inline-css/pull/40). While this lib neatly converts class related css rules into style attributes, I tweak it up to support any custom rule, including _exotic_ ones (_e.g._ `full-width`).

Interesting side-effect: VML style attributes (for, say, call-to-actions) can now be set, so you won't have to worry about having discrepancies between templates and style rules when modifying your call-to-actions. 

### Can I change these definitions?

Yes, you can. Open up `/gulptasks/core/core-mjml.js` and start adding properties. By default, any added rule will become an attribute.

## Templating

### Why using Handlebars

Handlebars allows us to use a neat built-in feature that make it skip partials declaration on first pass.

`\{{>partialName}}`
([Source](https://stackoverflow.com/questions/22249235/render-double-curly-brackets-inside-handlebars-partial))

This way, a single handlebars template can produce multiple files, based on the first layer of variables, ready to be fed with real production data.

### Use case: theming

#### First round —Gulp task

Given a single `index.tpl`, we loop through an array of JSON data defined in `/gulptasks/core/core-templates.js`.
Each index sets up what is static: pre-header, default unsuscribe link, invoke the correct partial, etc.

#### Second pass —on server

The produced new templates (one per theme) can now be used for a specific scenario or userbase sampling.


