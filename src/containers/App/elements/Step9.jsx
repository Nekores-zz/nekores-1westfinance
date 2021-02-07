import React, { useState } from "react";
import Wrapper, { Step1 } from "./styles";
import { Form, Header, Radio } from "semantic-ui-react";

export const Index = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  return (
    <Step1 ghost width="830px" maxWidth="830px">
      <Wrapper>
        <Form>
          <Header as="h4">Questions</Header>
          <Header as="h5">
            If questions (1), (2), (5), or (6) below are answered “Yes,” the
            loan will not be approved
          </Header>
          <Form.Field className="form-group mb-40">
            <label className="check-label mb-10">
              1) Is the Applicant or any owner of the Applicant presently
              suspended, debarred, proposed for debarment, declared ineligible,
              voluntarily excluded from participation in this transaction by any
              Federal department or agency, or presently involved in any
              bankruptcy?
            </label>
            <Radio
              label="Yes"
              name="radioGroup1"
              checked={checked1}
              onChange={() => setChecked1(!checked1)}
            />
            <Radio
              label="No"
              name="radioGroup1"
              checked={!checked1}
              onChange={() => setChecked1(!checked1)}
              className="ml-20"
            />
          </Form.Field>
          <Form.Field className="form-group mb-40">
            <label className="check-label mb-10">
              2) Has the Applicant, any owner of the Applicant, or any business
              owned or controlled by any of them, ever obtained a direct or
              guaranteed loan from SBA or any other Federal agency that is
              currently delinquent or has defaulted in the last 7 years and
              caused a loss to the government?
            </label>
            <Radio
              label="Yes"
              name="radioGroup2"
              checked={checked2}
              onChange={() => setChecked2(!checked2)}
            />
            <Radio
              label="No"
              name="radioGroup2"
              checked={!checked2}
              onChange={() => setChecked2(!checked2)}
              className="ml-20"
            />
          </Form.Field>
          <Form.Field className="form-group mb-40">
            <label className="check-label mb-10">
              3) Is the Applicant or any owner of the Applicant an owner of any
              other business, or have common management with, any other
              business? If yes, list all such businesses and describe the
              relationship on a separate sheet identified as addendum A. ?
            </label>
            <Radio
              label="Yes"
              name="radioGroup3"
              checked={checked3}
              onChange={() => setChecked3(!checked3)}
            />
            <Radio
              label="No"
              name="radioGroup3"
              checked={!checked3}
              onChange={() => setChecked3(!checked3)}
              className="ml-20"
            />
          </Form.Field>
          <Form.Field className="form-group mb-40">
            <label className="check-label mb-10">
              4) Has the Applicant received an SBA Economic Injury Disaster Loan
              between January 31, 2020 and April 3, 2020? If yes, provide
              details on a separate sheet identified as addendum B.
            </label>
            <Radio
              label="Yes"
              name="radioGroup4"
              checked={checked4}
              onChange={() => setChecked4(!checked4)}
            />
            <Radio
              label="No"
              name="radioGroup4"
              checked={!checked4}
              onChange={() => setChecked4(!checked4)}
              className="ml-20"
            />
          </Form.Field>
          <Form.Field className="form-group mb-40">
            <label className="check-label mb-10">
              5) Is the Applicant (if an individual) or any individual owning
              20% or more of the equity of the Applicant subject to an
              indictment, criminal information, arraignment, or other means by
              which formal criminal charges are brought in any jurisdiction, or
              presently incarcerated, or on probation or parole?
            </label>
            <Radio
              label="Yes"
              name="radioGroup5"
              checked={checked5}
              onChange={() => setChecked5(!checked5)}
            />
            <Radio
              label="No"
              name="radioGroup5"
              checked={!checked5}
              onChange={() => setChecked5(!checked5)}
              className="ml-20"
            />
          </Form.Field>
          <Form.Field className="form-group mb-40">
            <label className="check-label mb-10">
              6) Within the last 5 years, for any felony, has the Applicant (if
              an individual) or any owner of the Applicant 1) been convicted; 2)
              pleaded guilty; 3) pleaded nolo contendere; 4) been placed on
              pretrial diversion; or 5) been placed on any form of parole or
              probation (including probation before judgment)?
            </label>
            <Radio
              label="Yes"
              name="radioGroup6"
              checked={checked6}
              onChange={() => setChecked6(!checked6)}
            />
            <Radio
              label="No"
              name="radioGroup6"
              checked={!checked6}
              onChange={() => setChecked6(!checked5)}
              className="ml-20"
            />
          </Form.Field>
          <Form.Field className="form-group mb-40">
            <label className="check-label mb-10">
              7) Is the United States the principal place of residence for all
              employees of the Applicant included in the Applicant’s payroll
              calculation above?
            </label>
            <Radio
              label="Yes"
              name="radioGroup7"
              checked={checked7}
              onChange={() => setChecked7(!checked7)}
            />
            <Radio
              label="No"
              name="radioGroup7"
              checked={!checked7}
              onChange={() => setChecked7(!checked7)}
              className="ml-20"
            />
          </Form.Field>
          <Form.Field className="form-group mb-0">
            <label className="check-label mb-10">
              8) Is the Applicant a franchise that is listed in the SBA’s
              Franchise Directory?
            </label>
            <Radio
              label="Yes"
              name="radioGroup8"
              checked={checked8}
              onChange={() => setChecked8(!checked8)}
            />
            <Radio
              label="No"
              name="radioGroup8"
              checked={!checked8}
              onChange={() => setChecked8(!checked8)}
              className="ml-20"
            />
          </Form.Field>
        </Form>
      </Wrapper>
    </Step1>
  );
};
export default Index;
