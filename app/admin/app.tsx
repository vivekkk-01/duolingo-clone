"use client";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";
import { UnitList } from "./units/list";
import { UnitCreate } from "./units/create";
import { UnitEdit } from "./units/edit";
import { LessonList } from "./lessons/list";
import { LessonCreate } from "./lessons/create";
import { LessonEdit } from "./lessons/edit";
import { ChallengeList } from "./challenges/list";
import { ChallengeCreate } from "./challenges/create";
import { ChallengeEdit } from "./challenges/edit";
import { ChallengeOptionCreate } from "./challengeOptions/create";
import { ChallengeOptionList } from "./challengeOptions/list";
import { ChallengeOptionEdit } from "./challengeOptions/edit";

const dataProvider = simpleRestProvider("/api");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        recordRepresentation="title"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
      />
      <Resource
        name="units"
        recordRepresentation="title"
        list={UnitList}
        create={UnitCreate}
        edit={UnitEdit}
      />
      <Resource
        name="lessons"
        recordRepresentation="title"
        list={LessonList}
        create={LessonCreate}
        edit={LessonEdit}
      />
      <Resource
        name="challenges"
        recordRepresentation="question"
        list={ChallengeList}
        create={ChallengeCreate}
        edit={ChallengeEdit}
      />
      <Resource
        name="challengeOptions"
        recordRepresentation="text"
        list={ChallengeOptionList}
        create={ChallengeOptionCreate}
        edit={ChallengeOptionEdit}
        options={{ label: "Challenge Options" }}
      />
    </Admin>
  );
};

export default App;
