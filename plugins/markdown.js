import Vue from 'vue';
import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import enUS from '@kangc/v-md-editor/lib/lang/en-US';

/////
import VMdPreview from '@kangc/v-md-editor/lib/preview';
VMdPreview.use(githubTheme);

Vue.use(VMdPreview);
//////

VMdEditor.lang.use('en-US', enUS);

// Resources for the codemirror editor
import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';

VMdEditor.Codemirror = Codemirror;

VMdEditor.use(githubTheme);

Vue.use(VMdEditor);


