import React,{useState} from 'react';
import { Table, Input, Form, Checkbox,Radio ,Row,Col,Button,message} from 'antd';
//import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api from "../../constants/api";



/*eslint-disable*/
const { TextArea } = Input;
const ApplicationFormTable = () => {
  const [applicationDetails, setApplicationDetails] = useState({});

const navigate=useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setApplicationDetails({
      ...applicationDetails,
      [name]: value,
    });
  };

  const handleCheckboxChange = (checkedValues, name) => {
    setApplicationDetails({
      ...applicationDetails,
      [name]: checkedValues,
    });
  };

  const handleRadioChange = (e, name) => {
    const value = e.target.value; // Get the value from the radio button
    setApplicationDetails((prevState) => ({
      ...prevState,
      [name]: value === 'Yes' ? '1' : '0',  // Map Yes to 1 and No to 0
    }));
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    api
      .post("/content/insertApplication", values)
      .then((res) => {
        console.log(res.data.data);
        message.success("Registered Successfully");
        navigate('/success')
      })
      .catch((err) => {
        console.log(err);
        message.error("Registration Failed");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const column6 = [
    {
      title: 'Field',
      dataIndex: 'field',
      key: 'field',
      width: '30%', // Adjust this to make the column narrower
      render: (text) => (
        <span style={{ fontWeight: '400', fontSize: '12px', color: '#333' }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      width: '70%', // Allocate more space for the value column
      render: (text, record) => (
        <Form.Item name={record.name} style={{ marginBottom: '16px' }}>
          {record.type === 'text' && (
            <Input
              name={record.name}
              onChange={handleInputs}
              value={text}
              style={{
                width: '100%',
                borderRadius: '12px',
                border: '2px solid #ccc',
                padding: '12px 16px',
                boxSizing: 'border-box',
                fontSize: '16px',
                transition: 'border-color 0.3s ease',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#6c63ff')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          )}
          {record.type === 'email' && (
            <Input
              type="email"
              name={record.name}
              onChange={handleInputs}
              value={text}
              style={{
                width: '100%',
                borderRadius: '12px',
                border: '2px solid #ccc',
                padding: '12px 16px',
                boxSizing: 'border-box',
                fontSize: '16px',
                transition: 'border-color 0.3s ease',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#6c63ff')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          )}
          {record.type === 'number' && (
            <Input
              type="number"
              name={record.name}
              onChange={handleInputs}
              value={text}
              style={{
                width: '200%',
                borderRadius: '12px',
                border: '2px solid #ccc',
                padding: '12px 16px',
                boxSizing: 'border-box',
                fontSize: '16px',
                transition: 'border-color 0.3s ease',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#6c63ff')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          )}
          {record.type === 'textarea' && (
            <TextArea
              name={record.name}
              onChange={handleInputs}
              value={text}
              style={{
                width: '200%',
                borderRadius: '12px',
                border: '2px solid #ccc',
                padding: '12px 16px',
                boxSizing: 'border-box',
                fontSize: '16px',
                transition: 'border-color 0.3s ease',
                outline: 'none',
                minHeight: '120px',
                resize: 'vertical',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#6c63ff')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          )}
          {record.type === 'checkbox' && (
            <Checkbox.Group
              options={record.options}
              onChange={(checkedValues) =>
                handleCheckboxChange(checkedValues, record.name)
              }
              value={applicationDetails[record.name]}
              style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
            />
          )}
        </Form.Item>
      ),
    },
  ];
  


const column9 = [
  {
    title: 'Question',
    dataIndex: 'question',
    key: 'question',
    width: '70%',
  },
  {
    title: 'Response',
    dataIndex: 'response',
    key: 'response',
    width: '30%',
  },
];

const data9 = [
  {
    key: '1',
    question:
      'Is your IMS an integrated documentation set, including work instructions to a good level of development:',
    response: (
      <Form.Item name="docDevelopment"
      
      rules={[{ required: true, message: 'Please select Yes or No!' }]} // Validation rule
>
        <Radio.Group
          value={applicationDetails?.doc_set_development === '1' ? 'Yes' : 'No'}
          onChange={(e) => handleRadioChange(e, 'doc_set_development')}
        >
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      </Form.Item>
    ),
  },
  {
    key: '2',
    question:
      'Do your Management Reviews consider the overall business strategy and plan across all standards:',
    response: (
      <Form.Item name="managementReviews"
      rules={[{ required: true, message: 'Please select Yes or No!' }]} // Validation rule
>
        <Radio.Group
          value={applicationDetails?.management_review_scope === '1' ? 'Yes' : 'No'}
          onChange={(e) => handleRadioChange(e, 'management_review_scope')}
        >
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      </Form.Item>
    ),
  },
  {
    key: '3',
    question: 'Do you have an integrated approach to internal audits:',
    response: (
      <Form.Item name="integratedInternal"
      rules={[{ required: true, message: 'Please select Yes or No!' }]} // Validation rule
>
       <Radio.Group
          value={applicationDetails?.integrated_internal_audits === '1' ? 'Yes' : 'No'}
          onChange={(e) => handleRadioChange(e, 'integrated_internal_audits')}
        >
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      </Form.Item>
    ),
  },
  {
    key: '4',
    question: 'Do you have an integrated approach to policy and objectives:',
    response: (
      <Form.Item name="policyObjectives"
      rules={[{ required: true, message: 'Please select Yes or No!' }]} // Validation rule
>
           <Radio.Group
          value={applicationDetails?.integrated_policy_objectives === '1' ? 'Yes' : 'No'}
          onChange={(e) => handleRadioChange(e, 'integrated_policy_objectives')}
        >
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      </Form.Item>
    ),
  },
  {
    key: '5',
    question: 'Do you have an integrated approach to systems processes:',
    response: (
      <Form.Item name="systemProcesses"
      rules={[{ required: true, message: 'Please select Yes or No!' }]} // Validation rule
>
         <Radio.Group
          value={applicationDetails?.integrated_systems_processess === '1' ? 'Yes' : 'No'}
          onChange={(e) => handleRadioChange(e, 'integrated_systems_processess')}
        >
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      </Form.Item>
    ),
  },
  {
    key: '6',
    question:
      'Do you have an integrated approach to improvement mechanisms (corrective and preventive action; measurement and continual Improvement):',
    response: (
      <Form.Item name="improvementMechanisms"
      rules={[{ required: true, message: 'Please select Yes or No!' }]} // Validation rule
>
        <Radio.Group
          value={applicationDetails?.integrated_improvement_mechanisms === '1' ? 'Yes' : 'No'}
          onChange={(e) => handleRadioChange(e, 'integrated_improvement_mechanisms')}
        >
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      </Form.Item>
    ),
  },
  {
    key: '7',
    question: 'Do you have Integrated management support and responsibilities:',
    response: (
      <Form.Item name="managementSupport"
      rules={[{ required: true, message: 'Please select Yes or No!' }]} // Validation rule
>
        <Radio.Group
          value={applicationDetails?.management_support_responsibilities === '1' ? 'Yes' : 'No'}
          onChange={(e) => handleRadioChange(e, 'management_support_responsibilities')}
        >
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      </Form.Item>
    ),
  },
  {
    key: '8',
    question: 'Please confirm the preferred language for the conduct of the audit:',
    response: (
      <Form.Item name="preferredLanguage"
      rules={[{ required: true, message: 'Please select Yes or No!' }]} // Validation rule
>
        <Input
          type="text"
          defaultValue="ENGLISH"
          onChange={handleRadioChange}
          value={applicationDetails?.preferredLanguage}
        />
      </Form.Item>
    ),
  },
];
const data6 = [
  {
    key: '1',
    field: 'Company Name',
    value: applicationDetails?.company_name,
    name: 'company_name',
    type: 'text',
  },
  {
    key: '2',
    field: 'Company Representative Name',
    value: applicationDetails?.company_rep_name,
    name: 'company_rep_name',
    type: 'text',
  },
  {
    key: '3',
    field: 'Legal Obligation',
    value: applicationDetails?.legal_obligation,
    name: 'legal_obligation',
    type: 'text',
  },
  {
    key: '4',
    field: 'Company Address',
    value: applicationDetails?.company_address,
    name: 'company_address',
    type: 'text',
  },
  {
    key: '5',
    field: 'Address one:',
    value: applicationDetails?.address1,
    name: 'address1',
    type: 'text',
  },

  {
    key: '6',
    field: 'Address Two:',
    value: applicationDetails?.address2,
    name: 'address2',
    type: 'text',
  },
  
  {
    key: '8',
    field: 'Temporary Site Address:',
    value: applicationDetails?.address3,
    name: 'address3',
    type: 'text',
  },
 
  {
    key: '9',
    field: 'Standard Applied (QMS, EMS, OHS or Integrated)',
    value: applicationDetails?.standard,
    name: 'standard',
    type: 'text',
  },
  {
    key: '10',
    field: 'Contact Tel Number',
    value: applicationDetails?.phone,
    name: 'phone',
    type: 'text',
  },
  {
    key: '11',
    field: 'Contact Email',
    value: applicationDetails?.email,
    name: 'email',
    type: 'text',
  },
  {
    key: '12',
    field: 'Website',
    value: applicationDetails?.website,
    name: 'website',
    type: 'text',
  },
  {
    key: '13',
    field: 'Area of Organization',
    value: applicationDetails?.area_of_org,
    name: 'area_of_org',
    type: 'text',
  },
  {
    key: '14',
    field: 'Scope of Registration',
    value: applicationDetails?.scope_of_reg,
    name: 'scope_of_reg',
    type: 'text',
  },
  {
    key: '14',
    field: 'Client Operations are multi-site',
    value: applicationDetails?.client_operation,
    name: 'client_operation',
    type: 'text',
  },
 {
    key: '14',
    field: 'If Multi-site operations: All activities identified at different locations',
    value: applicationDetails?.operation_location,
    name: 'operation_location',
    type: 'text',
  },
  {
    key: '15',
    field: 'Operational Processes involved in the Organization',
    value: applicationDetails?.process,
    name: 'process',
    type: 'text',
  },
  {
    key: '16',
    field: 'Outsourced Processes',
    value: applicationDetails?.outsource_process,
    name: 'outsource_process',
    type: 'text',
  },
  {
    key: '17',
    field: 'Type Of Organization',
    value: applicationDetails?.organization_type,
    name: 'organization_type',
    type: 'checkbox',
    options: [
      { label: 'Manufacturing', value: 'Manufacturing' },
      { label: 'Govt. Organization', value: 'GovtOrganization' },
      { label: 'Service', value: 'Service' },
      { label: 'PSU', value: 'PSU' },
      { label: 'Others', value: 'Others' },
    ],
  },
  {
    key: '18',
    field: 'Detail any Applicable Legislation and/or standards you work to',
    value: applicationDetails?.applicable_legislation,
    name: 'applicable_legislation',
    type: 'text',
  },
  {
    key: '19',
    field: ' Do you run shifts? If so please give employee breakdown and types of work carried outv for each shift',
    value: applicationDetails?.employee_shift_breakdown,
    name: 'employee_shift_breakdown',
    type: 'text',
  },
  {
    key: '20',
    field: 'If you operate on temporary sites (Non-permanent), please detail typical number of sites',
    value: applicationDetails?.typical_site_count,
    name: 'typical_site_count',
    type: 'text',
  },
  {
    key: '21',
    field: 'EA Code if Known',
    value: applicationDetails?.ea_code,
    name: 'ea_code',
    type: 'text',
  },
  {
    key: '22',
    field: 'Documentation Language',
    value: applicationDetails?.doc_language,
    name: 'doc_language',
    type: 'text',
  },
  {
    key: '23',
    field: 'When do you expect to be ready for stage-1 assessment?',
    value: applicationDetails?.stage1_assessment,
    name: 'stage1_assessment',
    type: 'text',
  },
  {
    key: '24',
    field: 'When do you expect to be ready for Stage-2 Assessment?',
    value: applicationDetails?.stage2_assessment,
    name: 'stage2_assessment',
    type: 'text',
  },
  {
    key: '25',
    field: 'Have you used an external consultant or have you got any experience with Management Systems?',
    value: applicationDetails?.external_consultant_experience,
    name: 'external_consultant_experience',
    type: 'text',
  },
  {
    key: '26',
    field: 'How did you hear about HEC?',
    value: applicationDetails?.how_heard_about_hec,
    name: 'how_heard_about_hec',
    type: 'text',
  },
  
];
const shiftData = [
  {
    key: '1',
    field: 'Working shift - 1',
    permanent_employee: applicationDetails?.permanent_employee1,
    wfh: applicationDetails?.wfh1,
    sub_con: applicationDetails?.sub_con1,
    part_time_emp: applicationDetails?.part_time_emp1,
    tem_site_emp: applicationDetails?.tem_site_emp1,
    non_permanent_employee: applicationDetails?.non_permanent_employee1,
  },
  {
    key: '2',
    field: 'Working shift - 2',
    permanent_employee: applicationDetails?.permanent_employee2,
    wfh: applicationDetails?.wfh2,
    sub_con: applicationDetails?.sub_con2,
    part_time_emp: applicationDetails?.part_time_emp2,
    tem_site_emp: applicationDetails?.tem_site_emp2,
    non_permanent_employee: applicationDetails?.non_permanent_employee2,
  },
  {
    key: '3',
    field: 'Working shift - 3',
    permanent_employee: applicationDetails?.permanent_employee3,
    wfh: applicationDetails?.wfh3,
    sub_con: applicationDetails?.sub_con3,
    part_time_emp: applicationDetails?.part_time_emp3,
    tem_site_emp: applicationDetails?.tem_site_emp3,
    non_permanent_employee: applicationDetails?.non_permanent_employee3,
  },
];

const shiftColumns = [
  { title: 'No. of working shift/No. of Employee', dataIndex: 'field', key: 'field' },
  {
    title: 'Permanent Employee',
    dataIndex: 'permanent_employee',
    key: 'permanent_employee',
    render: (_, record) => (
      <Form.Item name={`permanent_employee${record.key}`}
         rules={[{ required: true, message: 'Please enter your name!' }]} >
        <Input
          type="number"
          value={record.permanent_employee}
          onChange={(e) => handleInputs(e, record.key, 'permanent_employee')}
          
        />
      </Form.Item>
    ),
  },
  {
    title: 'Work from Home',
    dataIndex: 'wfh',
    key: 'wfh',
    render: (_, record) => (
      <Form.Item name={`wfh${record.key}`}
      rules={[{ required: true, message: 'Please enter your name!' }]} >
        <Input
          type="number"
          value={record.wfh}
          onChange={(e) => handleInputs(e, record.key, 'wfh')}
        />
      </Form.Item>
    ),
  },
  {
    title: 'Contracted/Subcontracted Employee',
    dataIndex: 'sub_con',
    key: 'sub_con',
    render: (_, record) => (
      <Form.Item name={`sub_con${record.key}`}>
        <Input
          type="number"
          value={record.sub_con}
          onChange={(e) => handleInputs(e, record.key, 'sub_con')}
        />
      </Form.Item>
    ),
  },
  {
    title: 'Part Time Employee',
    dataIndex: 'part_time_emp',
    key: 'part_time_emp',
    render: (_, record) => (
      <Form.Item name={`part_time_emp${record.key}`}
      rules={[{ required: true, message: 'Please enter your name!' }]} >
        <Input
          type="number"
          value={record.part_time_emp}
          onChange={(e) => handleInputs(e, record.key, 'part_time_emp')}
        />
      </Form.Item>
    ),
  },
  {
    title: 'Employee At temporary site',
    dataIndex: 'tem_site_emp',
    key: 'tem_site_emp',
    render: (_, record) => (
      <Form.Item name={`tem_site_emp${record.key}`}
      rules={[{ required: true, message: 'Please enter your name!' }]} >
        <Input
          type="number"
          value={record.tem_site_emp}
          onChange={(e) => handleInputs(e, record.key, 'tem_site_emp')}
        />
      </Form.Item>
    ),
  },
  {
    title: 'Non Permanent Employee',
    dataIndex: 'non_permanent_employee',
    key: 'non_permanent_employee',
    render: (_, record) => (
      <Form.Item name={`non_permanent_employee${record.key}`}
      rules={[{ required: true, message: 'Please enter your name!' }]} >
        <Input
          type="number"
          value={record.non_permanent_employee}
          onChange={(e) => handleInputs(e, record.key, 'non_permanent_employee')}
        />
      </Form.Item>
    ),
  },
];

const columntable = [
  {
    title: '',
    dataIndex: 'section',
    key: 'section',
  },
  {
    title: '',
    dataIndex: 'input',
    key: 'input',
    colSpan: 12, 
  },
];

const datatable = [
  {
    key: '1',
    section: 'Please summarise the significant Environmental Aspects that you have identified',
    input: (
      <Form.Item name="significant_environmental_aspects"
      rules={[{ required: true, message: 'Please enter your name!' }]} >
        
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.significant_environmental_aspects}
        />
      </Form.Item>
    ),
  },
  {
    key: '2',
    section: 'Please detail any Environmental legal requirements related to your company activity',
    input: (
      <Form.Item name="environmental_legal_requirements">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.environmental_legal_requirements}
        />
      </Form.Item>
    ),
  },
];

const column3 = [
  {
    title: '', // This will be the label column for the form questions
    dataIndex: 'section',
    key: 'section',
  },
  {
    title: '', // This will hold the input fields
    dataIndex: 'input',
    key: 'input',
    colSpan: 12, // Merging columns for input fields
  },
];

const data3 = [
  {
    key: '1',
    section: 'Please summarise the significant Hazards that you have identified',
    input: (
      <Form.Item name="significant_hazards">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.significant_hazards}
        />
      </Form.Item>
    ),
  },
  {
    key: '2',
    section: 'Please detail any hazardous materials that you typically use or come into contact with (give site specific details where appropriate)',
    input: (
      <Form.Item name="hazardous_materials">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.hazardous_materials}
        />
      </Form.Item>
    ),
  },
  {
    key: '3',
    section: 'Please detail any OH&S legal requirements related to your company activity',
    input: (
      <Form.Item name="ohs_legal_requirements">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.ohs_legal_requirements}
        />
      </Form.Item>
    ),
  },
  {
    key: '4',
    section: 'Do you recognise any Union(s), if so please give details',
    input: (
      <Form.Item name="recognized_unions">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.recognized_unions}
        />
      </Form.Item>
    ),
  },
];

const columns5 = [
  {
    title: 'Type', // First column for the type of accidents
    dataIndex: 'type',
    key: 'type',
    width: '40%',
  },
  {
    title: 'Current year',
    dataIndex: 'current_year',
    key: 'current_year',
    width: '20%',
  },
  {
    title: 'Previous year',
    dataIndex: 'previous_year',
    key: 'previous_year',
    width: '20%',
  },
  {
    title: '2 years ago',
    dataIndex: 'two_years_ago',
    key: 'two_years_ago',
    width: '20%',
  },
];

const data5 = [
  {
    key: '1',
    type: 'Major accidents/legal action',
    current_year: (
      <Form.Item name="major_accidents_current_year">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.major_accidents_current_year}
        />
      </Form.Item>
    ),
    previous_year: (
      <Form.Item name="major_accidents_prev_year">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.major_accidents_prev_year}
        />
      </Form.Item>
    ),
    two_years_ago: (
      <Form.Item name="major_accidents_year_ago">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.major_accidents_year_ago}
        />
      </Form.Item>
    ),
  },
  {
    key: '2',
    type: 'Over seven days absences because of an incident',
    current_year: (
      <Form.Item name="absences_days_current_year">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.absences_days_current_year}
        />
      </Form.Item>
    ),
    previous_year: (
      <Form.Item name="absences_days_prev_year">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.absences_days_prev_year}
        />
      </Form.Item>
    ),
    two_years_ago: (
      <Form.Item name="absences_days_year_ago">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.absences_days_year_ago}
        />
      </Form.Item>
    ),
  },
  {
    key: '3',
    type: 'Dangerous occurrences',
    current_year: (
      <Form.Item name="occurrence_current_year">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.occurrence_current_year}
        />
      </Form.Item>
    ),
    previous_year: (
      <Form.Item name="occurrence_prev_year">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.occurrence_prev_year}
        />
      </Form.Item>
    ),
    two_years_ago: (
      <Form.Item name="occurrence_year_ago">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.occurrence_year_ago}
        />
      </Form.Item>
    ),
  },
  {
    key: '4',
    type: 'Accidents/Incidents – minor not requiring hospital treatment',
    current_year: (
      <Form.Item name="hospital_treatment_current_year">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.hospital_treatment_current_year}
        />
      </Form.Item>
    ),
    previous_year: (
      <Form.Item name="hospital_treatment_prev_year">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.hospital_treatment_prev_year}
        />
      </Form.Item>
    ),
    two_years_ago: (
      <Form.Item name="hospital_treatment_year_ago">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.hospital_treatment_year_ago}
        />
      </Form.Item>
    ),
  },
];

const column8 = [
  {
    title: 'Question',
    dataIndex: 'question',
    key: 'question',
    width: '70%',
  },
  {
    title: 'Response',
    dataIndex: 'response',
    key: 'response',
    width: '30%',
  },
];

const data8 = [
  {
    key: '1',
    question:
      'Please list the ISO 27001 Annex A control objectives and controls that are justified as exclusions',
    response: (
      <Form.Item name="excluded_controls_iso27001">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.excluded_controls_iso27001}
        />
      </Form.Item>
    ),
  },
  {
    key: '2',
    question: 'Number of system users',
    response: (
      <Form.Item name="no_of_sys_users">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.no_of_sys_users}
        />
      </Form.Item>
    ),
  },
  {
    key: '3',
    question: 'Number of servers',
    response: (
      <Form.Item name="no_of_servers">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.no_of_servers}
        />
      </Form.Item>
    ),
  },
  {
    key: '4',
    question: 'Number of workstations',
    response: (
      <Form.Item name="no_of_work_station">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.no_of_work_station}
        />
      </Form.Item>
    ),
  },
  {
    key: '5',
    question: 'Number of application development and maintenance staff',
    response: (
      <Form.Item name="no_of_maintenance_staff">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.no_of_maintenance_staff}
        />
      </Form.Item>
    ),
  },
  {
    key: '6',
    question: 'Date of Application',
    response: (
      <Form.Item name="date_of_application">
        <Input
          type="date"
          onChange={handleInputs}
          value={applicationDetails?.date_of_application}
        />
      </Form.Item>
    ),
  },
  {
    key: '7',
    question: 'Signature of Representative',
    response: (
      <Form.Item name="sign_represent">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.sign_represent}
        />
      </Form.Item>
    ),
  },
  {
    key: '8',
    question:
      'Provide details of Network and encryption technology in use as part of the ISMS',
    response: (
      <Form.Item name="network_encryption_tech">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.network_encryption_tech}
        />
      </Form.Item>
    ),
  },
  {
    key: '9',
    question:
      'Please detail any Information security legal requirements related to your company activity',
    response: (
      <Form.Item name="inform_security_legal_req">
        <Input
          type="text"
          onChange={handleInputs}
          value={applicationDetails?.inform_security_legal_req}
        />
      </Form.Item>
    ),
  },
];

return (
  <>
  <div
      style={{
        padding: "40px",
        background: "#f0f2f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "#fff",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#4caf50",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Application Form
        </h2>
        <Table
          columns={column6}
          dataSource={data6}
          pagination={false}
          rowKey="key"
          style={{
            marginBottom: "20px",
          }}
          bordered
        />

      {/* Table: Section 2 */}
      <Table
        bordered
        columns={shiftColumns}
        dataSource={shiftData}
        pagination={false}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ddd',
          fontSize: '14px',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
      />

      {/* Heading */}
      <h4 style={{ textAlign: 'center', padding: '10px', marginBottom: '20px' }}>
        Please complete this section for Integrated Management System Certification
      </h4>

      {/* Table: Section 3 */}
      <Table
        columns={column9}
        dataSource={data9}
        pagination={false}
        bordered
        style={{ marginBottom: '20px' }}
      />

      <p style={{ marginTop: '16px', fontSize: '14px', color: '#555' }}>
        * The effective number of personnel consists of all personnel (permanent, temporary, and
        part-time) involved within the scope of certification, including those working on each shift.
        When included within the scope of certification, it shall also include
        contractors/subcontractors’ personnel performing work or work-related activities that are
        under the control or influence of the organization, which can impact on the organization’s
        Management System performance.
      </p>

      {/* Section for ISO 14001 Applications */}
      <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Please complete this section for ISO 14001 Applications
      </h4>
      <Table
        columns={columntable}
        dataSource={datatable}
        pagination={false}
        bordered
        style={{ marginBottom: '20px' }}
      />

      {/* Section for OHSAS 18001/ISO 45001 Applications */}
      <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Please complete this section for OHSAS 18001/ISO 45001 Applications
      </h4>
      <Table
        columns={column3}
        dataSource={data3}
        pagination={false}
        bordered
        style={{ marginBottom: '20px' }}
      />

      {/* Accident Statistics Section */}
      <h4 style={{ textAlign: 'left', padding: '10px', marginBottom: '20px' }}>
        Please provide accident statistics for the last two years and the current year to date.
      </h4>
      <Table
        columns={columns5}
        dataSource={data5}
        pagination={false}
        bordered
        style={{ marginBottom: '20px' }}
      />

      {/* Section for ISO 27001:2013 Applications */}
      <h4 style={{ textAlign: 'left', padding: '10px', marginBottom: '20px' }}>
        Please complete this section for ISO 27001:2013 Applications
      </h4>
      <Table
        columns={column8}
        dataSource={data8}
        pagination={false}
        bordered
      />

      {/* Submit Button */}
      <Row justify="center" style={{ marginTop: "20px" }}>
          <Col>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "#4caf50",
                border: "none",
                fontSize: "16px",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Submit
            </Button>
          </Col>
        </Row>
    </Form>
  </div>
</>

);
}

export default ApplicationFormTable;
