import React from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

const options = [
  { value: 'pt', label: 'Português (BR)' },
  { value: 'en', label: 'English' },
];

// Estilização customizada do Select
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: 8,
    borderColor: state.isFocused ? '#28a745' : 'black',
    boxShadow: state.isFocused ? '0 0 5px green' : 'none',
    cursor: 'pointer',
    minHeight: 40,
    fontSize: 14,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#28a745' : 'white',
    color: state.isFocused ? 'white' : 'black',
    cursor: 'pointer',
    fontSize: 14,
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: 14,
  }),
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (selectedOption) => {
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value);
    }
  };

  const currentLanguage = options.find(
    (option) => option.value === i18n.language
  );

  return (
    <div className="language-selector-wrapper" style={{ width: 160 }}>
      <Select
        options={options}
        value={currentLanguage}
        onChange={handleChangeLanguage}
        styles={customStyles}
        isSearchable={false}
        placeholder="Idioma"
        menuPosition="fixed"
      />
    </div>
  );
};

export default LanguageSelector;
