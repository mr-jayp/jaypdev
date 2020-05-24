import React from 'react';
import { SkillColumn, Img, Skill } from './style';

const ProfessionalSkill = (skillContent) => {
  const { alternativeText, skill } = skillContent;
  return (
    <SkillColumn>
      <Img src={skillContent.icon.fields.file.url} alt={alternativeText} />
      <Skill>{skill}</Skill>
    </SkillColumn>
  );
};

export default ProfessionalSkill;
