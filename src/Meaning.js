import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const groupedDefinitions = {};
  props.meaning.definitions.forEach((definition) => {
    const partOfSpeech = props.meaning.partOfSpeech;
    if (!groupedDefinitions[partOfSpeech]) {
      groupedDefinitions[partOfSpeech] = [];
    }
    groupedDefinitions[partOfSpeech].push(definition);
  });

  return (
    <div>
      {Object.keys(groupedDefinitions).map((partOfSpeech) => (
        <div key={partOfSpeech}>
          <h3>{partOfSpeech}</h3>
          {groupedDefinitions[partOfSpeech].map((definition, index) => (
            <div key={index}>
              <p className="text">
                {definition.definition}
                <br />
                <em>{definition.example}</em>
                <br />
              </p>
              {definition.synonyms && definition.synonyms.length > 0 && (
                <div>
                  <h3>Synonyms</h3>
                  <Synonyms synonyms={definition.synonyms} />
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
