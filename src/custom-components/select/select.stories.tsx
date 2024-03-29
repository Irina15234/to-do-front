import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomSelect, CustomSelectProps } from './select';
import { SelectProps } from '@mui/material';

export default {
  component: CustomSelect,
  title: 'CustomSelect'
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = (args: SelectProps & CustomSelectProps) => (
  <CustomSelect {...args} />
);

export const SelectWithLabel = Template.bind({});

SelectWithLabel.args = {
  label: 'label',
  options: [{ id: 0, value: 'qwe' }]
};

export const SelectWithIcon = Template.bind({});

const icon =
  'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIGJhc2VQcm9maWxlPSJ0aW55LXBzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMTYzIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjE2MyI+Cgk8dGl0bGU+aW1hZ2U8L3RpdGxlPgoJPGRlZnM+CgkJPGltYWdlICB3aWR0aD0iMjU2IiBoZWlnaHQ9IjE1NyIgaWQ9ImltZzEiIGhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUUFBQUFDZEFRTUFBQUJoTXpRTUFBQUFBWE5TUjBJQjJja3Nmd0FBQUFaUVRGUkZBQUFBeDBSS001c2JoUUFBQUFKMFVrNVRBUDlia1NLMUFBQUN0RWxFUVZSNG5JWFlRWktESUJDRllTMFdMRDBDUitGb2VEU1A0aEd5ek1JYUpvcEkwLzBlem1KcVNuNFJ2aVNUbUducWYzS2VoajgrNTIwWWhKdy93eURtZkF5RG5QUGZhSHorQmNOVnVqTllCNEUvZzIwUUxHZXdENEp3QnFOOVhzRjNFTVF6R0VHay9BS1I4eGhpZmd0Y0NWWWErQkpzTkZoS3NOTWdsSUJMeFJKd3FWUUNMbFhHdWRUTndDR2VZQ1dCcThGR0FsK0RuUVRMV3hCcXdLUmlEWmhVcWdHVHF1Tk02bUZnVXE0Rkt3eDhDellZTEMzWTN3SU1FVnFBSWVKYmtGcUFwZG80bGhKT1dNckpZQVdCbDhFR2drVUdPd2lDREpCVWxBR0M2QUlFa2Q0Q09ZNmticWMvS25VN0hZbEozVTVIWkZLMzB6Y3dxWHZnc3pDcGUrcmRNNmw3Y1Z0ZEMyTllIWU9vKzYvUEd6MCtQeWVTd0QyWEpsSnQ4VVNxYlo5SXRjTkVxazFNcE5yUzJuS2hrOXd3WU1pU2pEakp5YUFUa1pKTGgxSnk4MUJLSG9SU2Nsb29KUmNHcGVUZWtWUi9ERWoxc3dLSVBnQVEvY0pCMEc4ZFNQV0hnRlEvS1pEcTF3MmsrcDFiS1gzRVNPazVqWlJlbFlIUWdZSFFHdzhhUXA5aHBQUTFqWlJldFpIUys5WXVWazZkTVJ0N2RVMW5IcjNZQjE3dnF1Njdic3QrakZSSGpLeVdNbytObHRKT1JrbzdhUm4wV3V6T1FhL203cXJvLzBHM2J1dWtwTkRIN2U2WWNyV3pXaWUxTHV1a2RtYWRlaHY4MzEyY2hkOGZ4SFh4TzR4WU9YNlBDZzFDL0dtbFBzU3BrNHFBb1h1bUk2ZnV0WUtjcEE1MkV1ZVI5OUYyWmZ1NlUxTG8rU1NrTm5yNzloeGZvTk1qdGRlcFZoMjRldWtJR1o3dGYya3cxU0JocHdweFRNUkpCK0JUY0x5bkprNVZxZ2E3RFc2Z2lUZzlVaE54ZXFUNDNmd3NBM2hISWdONFQ1UGVnaWdDZU5zVVJBRHZ6QllSN0cvQmhnSXZnaFVGVGdSb3ZFaVZCNHZjNDc0RzZSSkt6S2xJSGRkdmNpTWVjbjFXazF2NTVSb0t6S2xBbEpmZWhnTjNEVG5HVUNEVzh6ZjkxaVJkQUlsL01ST3UvUzM4eXlIL1crTS8zQWdPOXdvcGUxTUFBQUFBU1VWT1JLNUNZSUk9Ii8+Cgk8L2RlZnM+Cgk8c3R5bGU+CgkJdHNwYW4geyB3aGl0ZS1zcGFjZTpwcmUgfQoJPC9zdHlsZT4KCTx1c2UgaWQ9IkJhY2tncm91bmQiIGhyZWY9IiNpbWcxIiB4PSIwIiB5PSI0IiAvPgo8L3N2Zz4=';

SelectWithIcon.args = {
  label: 'label',
  options: [{ id: 0, value: 'qwe', icon }]
};
