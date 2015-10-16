import {
  default as React,
  Component,
} from "react";

import {
  default as ReactDOM,
} from "react-dom";

import {
  default as GitHubForkRibbon,
} from "react-github-fork-ribbon";

export function CustomizedTagComponent (props) {
  const trigger = props.currentMentionText.substring(0, 1);

  return (
    <div>
      <button onClick={() => props.selectMentionCallback(null)}>
        Cancel
      </button>
      <button onClick={() => props.selectMentionCallback(trigger + "mention")}>
        Select `{ trigger }mention`
      </button>
      CustomizedTagComponent!!!
    </div>
  );
}

export default class ReactRoot extends Component {

  componentDidMount () {
    const MediumEditor = require("medium-editor");
    const TCMention = require("../../../src").TCMention;

    this.editor = new MediumEditor(this.refs.editable, {
      extensions: {
        "mention": new TCMention({
          extraClassName: "abc123",
          extraActiveClassName: "xyz",
          tagName: "b",
          renderPanelContent: function (panelEl, currentMentionText, selectMentionCallback) {
            ReactDOM.render((
              <CustomizedTagComponent
                currentMentionText={currentMentionText}
                selectMentionCallback={selectMentionCallback}
              />
            ), panelEl);
          },
          destroyPanelContent: function (panelEl) {
            ReactDOM.unmountComponentAtNode(panelEl);
          },
          activeTriggerList: ["#", "@"]
        })
      }
    });
  }

  render () {
    return (
      <div>
        <GitHubForkRibbon
          position="right"
          color="black"
          href="https://github.com/tomchentw/medium-editor-tc-mention">
          Fork me on GitHub
        </GitHubForkRibbon>
        <h1>Medium Editor</h1>
        <div className="editable" ref="editable">
          <p>My father’s family name being <a href="https://en.wikipedia.org/wiki/Pip_(Great_Expectations)">Pirrip</a>, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip.</p>
          <p>I give Pirrip as my father’s family name, on the authority of his tombstone and my sister,—Mrs. Joe Gargery, who married the blacksmith. As I never saw my father or my mother, and never saw any likeness of either of them (for their days were long before the days of photographs), my first fancies regarding what they were like were unreasonably derived from their tombstones. The shape of the letters on my father’s, gave me an odd idea that he was a square, stout, dark man, with curly black hair. From the character and turn of the inscription, “Also Georgiana Wife of the Above,” I drew a childish conclusion that my mother was freckled and sickly. To five little stone lozenges, each about a foot and a half long, which were arranged in a neat row beside their grave, and were sacred to the memory of five little brothers of mine,—who gave up trying to get a living, exceedingly early in that universal struggle,—I am indebted for a belief I religiously entertained that they had all been born on their backs with their hands in their trousers-pockets, and had never taken them out in this state of existence.</p>
          <p>Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea. My first most vivid and broad impression of the identity of things seems to me to have been gained on a memorable raw afternoon towards evening. At such a time I found out for certain that this bleak place overgrown with nettles was the churchyard; and that Philip Pirrip, late of this parish, and also Georgiana wife of the above, were dead and buried; and that Alexander, Bartholomew, Abraham, Tobias, and Roger, infant children of the aforesaid, were also dead and buried; and that the dark flat wilderness beyond the churchyard, intersected with dikes and mounds and gates, with scattered cattle feeding on it, was the marshes; and that the low leaden line beyond was the river; and that the distant savage lair from which the wind was rushing was the sea; and that the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.</p>
          <p><a href="http://google.com"><img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150" /></a></p>
        </div>
      </div>
    );
  }
}