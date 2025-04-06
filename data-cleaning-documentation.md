# Detroit Metropolitan Area PM2.5 Air Quality Data Cleaning Documentation for EPA Air Quality Dataset

## Original Dataset Information
- **Number of Rows**: 1,138
- **Number of Columns**: 19
- **Dataset Purpose**: Air quality measurements focusing on PM2.5 concentrations
- **Source**: https://www.epa.gov/outdoor-air-quality-data/download-daily-data
- **Date Range**: January 1st, 2025 - April 5th, 2025

## Columns Removed Due to Constant Values

| Column Name | Constant Value | Description |
|-------------|----------------|-------------|
| Daily Obs Count | 1 | Number of observations taken per day |
| Percent Complete | 100 | Percentage of expected measurements collected |
| AQS Parameter Code | 88101 | Air Quality System code for the parameter measured |
| AQS Parameter Description | PM2.5 - Local Conditions | Description of the parameter being measured |
| CBSA Code | 19820 | Core-Based Statistical Area code |
| CBSA Name | Detroit-Warren-Dearborn, MI | Name of the Core-Based Statistical Area |
| State FIPS Code | 26 | Federal Information Processing Standards code for the state |
| State | Michigan | Name of the state where measurements were taken |

## Retained Columns

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| Date | Date | Date of measurement |
| Site ID | Integer | Unique identifier for the monitoring station |
| POC | Integer | Parameter Occurrence Code |
| Daily Mean PM2.5 Concentration | Float | Average PM2.5 concentration for the day |
| Units | String | Unit of measurement (μg/m³ LC - micrograms per cubic meter, local conditions) |
| Daily AQI Value | Integer | Air Quality Index value |
| Local Site Name | String | Name of the monitoring site |
| County FIPS Code | Integer | FIPS code for the county |
| County | String | Name of the county |
| Site Latitude | Float | Latitude coordinate of the monitoring site |
| Site Longitude | Float | Longitude coordinate of the monitoring site |

## Cleaning Process
1. Identified columns with constant values across all rows
2. Documented the constant values for reference
3. Created a cleaned version of the dataset with constant columns removed

## Post-Cleaning Dataset Specifications
- **Cleaned Dataset Name**: cleaned-epa-airnow-dmsa.csv
- **Number of Rows**: 1,138 (unchanged)
- **Number of Columns**: 11 (reduced from 19)
- **File Format**: CSV
- **Date of Cleaning**: April 6, 2025
- **Cleaning Performed By**: Asim Williams

## Additional Notes
The dataset focuses on PM2.5 air quality measurements exclusively from the Detroit-Warren-Dearborn metropolitan area in Michigan. All measurements have 100% data completeness with 1 observation per day. The data spans the first quarter of 2025 and contains readings from multiple monitoring sites within the Detroit metropolitan area.
