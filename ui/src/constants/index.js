export const SYSTEMS = ['FULFILMENT', 'NETWORK'];
export const SERVICE_ATTRIBUTES = ['CONNECTED_TO_UNI', 'CVC_SERVICE_ID', 'ACCESS_SEEKER'];
export const DEVICES_ORDER = ['ECS', 'ETS', 'EFS', 'EAS', 'AAS', 'OLT', 'DSLAM', 'NTD', 'DPU', 'ONT'];
export const QUERY = "SELECT sexp_sex, sum(number) AS number, age5p_age_in_five_year_groups FROM dlgc_YEAR_ste_demo_age5gend GROUP BY sexp_sex, age5p_age_in_five_year_groups ORDER BY age5p_age_in_five_year_groups='100 years and over', age5p_age_in_five_year_groups='95-99 years', age5p_age_in_five_year_groups='90-94 years', age5p_age_in_five_year_groups='85-89 years', age5p_age_in_five_year_groups='80-84 years', age5p_age_in_five_year_groups='75-79 years', age5p_age_in_five_year_groups='70-74 years', age5p_age_in_five_year_groups='65-69 years', age5p_age_in_five_year_groups='60-64 years', age5p_age_in_five_year_groups='55-59 years', age5p_age_in_five_year_groups='50-54 years', age5p_age_in_five_year_groups='45-49 years', age5p_age_in_five_year_groups='40-44 years', age5p_age_in_five_year_groups='35-39 years', age5p_age_in_five_year_groups='30-34 years', age5p_age_in_five_year_groups='25-29 years', age5p_age_in_five_year_groups='20-24 years', age5p_age_in_five_year_groups='15-19 years', age5p_age_in_five_year_groups='10-14 years', age5p_age_in_five_year_groups='5-9 years', age5p_age_in_five_year_groups='0-4 years'";
