# 📌 App Development Process - Detroit Air Quality Analyzer

## Step 1: Determine Your Target Users
**Public Health Advocates** in the Detroit Metropolitan Area who need accessible air quality data to inform community health initiatives and policy advocacy.

## Step 2: Select your dataset and ensure you can analyze it

### 🔍 Dataset Understanding
1️⃣ **What is my dataset about in one sentence?**  
This dataset contains daily PM2.5 air quality measurements from 12 monitoring stations across the Detroit Metropolitan Area during the first quarter of 2025.

2️⃣ **How many rows and columns does it have?**  
The dataset contains 1,138 rows (daily readings from 12 stations) and 11 columns.

3️⃣ **List 3-5 of the most important columns and what they represent.**  
- `Date`: The date when the measurement was taken
- `Daily Mean PM2.5 Concentration`: Average concentration of PM2.5 particulate matter in μg/m³
- `Daily AQI Value`: Air Quality Index value calculated from PM2.5 levels
- `Local Site Name`: Name of the monitoring station (12 unique sites)
- `County`: County where the monitoring station is located

4️⃣ **Which columns contain numerical data, and which contain categories or text?**  
**Numerical data**: Daily Mean PM2.5 Concentration, Daily AQI Value, Site Latitude, Site Longitude, Site ID  
**Categorical/text data**: Date, Units, Local Site Name, County

### 🧩 Analysis Planning
5️⃣ **What are 2-3 specific questions I want to answer with this data?**  
- How does air quality (PM2.5 levels) compare across the 12 monitoring sites in the Detroit metro area?
- Are there consistent temporal patterns in air quality across all sites (daily, weekly, or monthly trends)?
- Which monitoring sites consistently report the highest and lowest air quality, and how do these relate to their geographic locations?

6️⃣ **For each question, which columns will I need to analyze?**  
- For site comparison: Local Site Name, County, Daily Mean PM2.5 Concentration, Daily AQI Value, Site Latitude, Site Longitude
- For temporal patterns: Date, Local Site Name, Daily Mean PM2.5 Concentration
- For site ranking: Local Site Name, County, Daily Mean PM2.5 Concentration, Daily AQI Value, Site Latitude, Site Longitude

7️⃣ **What kind of charts would best represent my findings?**  
- For site comparison: Bar chart showing average PM2.5 by monitoring site, with standard deviation indicators
- For temporal patterns: Multi-line chart showing PM2.5 levels over time for each site, with option to highlight specific sites
- For site ranking: Map visualization using latitude/longitude with color-coded markers based on average PM2.5 levels
- For overall trends: Calendar heatmap showing daily PM2.5 levels with color intensity representing AQI categories

### 🎯 Visualization Planning
8️⃣ **For each chart I plan to create:**

**Bar Chart - Site Comparison**
- X-axis: 12 monitoring site names
- Y-axis: Average PM2.5 concentration
- Error bars: Standard deviation of readings to show variability
- Colors: Gradient based on EPA air quality categories
- Title: "Average PM2.5 Concentration by Monitoring Site (Q1 2025)"

**Multi-Line Chart - Temporal Patterns**
- X-axis: Date (Jan-Apr 2025)
- Y-axis: PM2.5 concentration
- Lines: 12 different colored lines (one per site) with toggle options
- Annotations: Weekend/weekday indicators
- Title: "Daily PM2.5 Concentrations Across Monitoring Sites"

**Map Visualization - Geographic Distribution**
- Base map: Detroit metropolitan area
- Markers: 12 monitoring sites plotted by lat/long coordinates
- Marker colors: Based on average PM2.5 levels (green to red scale)
- Tooltip: Site name, county, average PM2.5, number of days above threshold
- Title: "Geographic Distribution of Air Quality Monitoring Sites"

**Calendar Heatmap - Daily AQI Categories**
- Layout: Calendar view of Q1 2025
- Cell colors: EPA AQI category colors
- Aggregation: Average across all sites or selectable by site
- Title: "Daily Air Quality Index Categories (Q1 2025)"

### 💭 Analysis Expectations
9️⃣ **What patterns or trends do I expect to find?**  
- Variation in PM2.5 levels between different counties and neighborhoods
- Consistent day-of-week patterns (e.g., higher levels on weekdays due to commuting)
- Correlations between site locations and PM2.5 levels (e.g., higher near industrial zones)
- Certain monitoring stations consistently showing higher or lower readings than others

🔟 **What would be an interesting or surprising finding?**  
- Neighboring monitoring stations showing significantly different air quality measurements
- Unexpected spikes in PM2.5 levels that don't follow typical patterns
- Significant differences in air quality trends between different counties
- Certain days where all stations show abnormal readings, suggesting regional events

1️⃣1️⃣ **How might this analysis be useful or interesting to others?**  
- Public health advocates can identify specific neighborhoods facing the highest pollution burden
- Community organizations can target educational outreach to the most affected areas
- Policy advocates can use site-specific data to push for localized interventions
- Researchers can examine how air quality varies across socioeconomic boundaries
- Residents can better understand the air quality patterns in their specific neighborhoods

## Step 3: Create Your Business Thesis

**Public Health Advocates** will use **Detroit Air Quality Analyzer** to compare PM2.5 pollution data across 12 monitoring sites in the Detroit metropolitan area to identify neighborhood-level disparities and support evidence-based advocacy for the most affected communities.

## Step 4: Identify the Most Significant Benefit

**Neighborhood-Level Insight**: The Detroit Air Quality Analyzer transforms complex air quality data from 12 monitoring sites into accessible, comparative visualizations that reveal neighborhood-level air quality disparities, enabling public health advocates to precisely identify the communities facing the highest pollution burden and target their limited resources where they can have the greatest impact.

## Step 5: Create the User Stories That Enable Users to Access Those Benefits

### Required User Stories:

1. **As a user, I can interact with a UI to choose which data analysis or visualization I want to see** so that I can access the air quality information I need for my advocacy work.

2. **As a user, I can read an "About Me" page** to learn about the web app's creator.

### Additional User Stories:

3. **As a public health advocate, I can view comparative PM2.5 levels across all 12 monitoring sites** so that I can identify which neighborhoods experience the poorest air quality.

4. **As a public health advocate, I can see daily PM2.5 trends for each monitoring site** so that I can understand temporal patterns and identify concerning periods.

5. **As a public health advocate, I can view a map showing the geographic distribution of air quality measurements** so that I can understand the spatial relationship between monitoring sites and their air quality readings.

6. **As a public health advocate, I can filter and compare specific monitoring sites** so that I can perform detailed analyses of neighborhoods of interest.

7. **As a public health advocate, I can download visualization images and data** so that I can include them in presentations and reports to community members and policymakers.

## Step 6: Define the Functional Requirements of Your User Stories

### User Story 1
**As a user, I can interact with a UI to choose which data analysis or visualization I want to see so that I can access the air quality information I need for my advocacy work.**

**Functional Requirements:**

**Requirement ID:** FR-001

**Description:**
- **Action:** The system should provide a navigation menu or dashboard with clear options for the different analyses and visualizations of the 12 monitoring sites.
- **Interface Elements:** 
  - Navigation sidebar with labeled buttons for each analysis type
  - Dashboard view with cards for each visualization type
  - Visual indicators for currently selected view
- **Validation Rules:** 
  - User must select an analysis type before viewing data
  - System should gracefully handle invalid selections with appropriate error messages
- **Data Requirements:** 
  - The system must load the complete air quality dataset from the PostgreSQL database
  - Data must be pre-processed for each visualization type to ensure fast rendering
- **Business Logic:** 
  - When a selection is made, the appropriate data query should execute and the visualization should render
  - Default to the site comparison view when first loading the application

**Priority:** High

**Acceptance Criteria:**
- Navigation options include at least: Site Comparison, Time Trends, Geographic Map, and Daily AQI Calendar
- Each visualization type has a clear, informative title and legend
- Users can switch between views without page reload
- The system indicates loading state during data retrieval
- All visualizations are responsive and adjust to screen size

### User Story 2
**As a user, I can read an "About Me" page to learn about the web app's creator.**

**Functional Requirements:**

**Requirement ID:** FR-002

**Description:**
- **Action:** The system should display an About Me page with information about the creator.
- **Interface Elements:** 
  - Navigation link to the About Me page
  - Profile section with creator information
  - Optional contact information
- **Validation Rules:** N/A
- **Data Requirements:** Static content that does not require database access
- **Business Logic:** Simple page navigation with no complex operations

**Priority:** Medium

**Acceptance Criteria:**
- About Me page is accessible from all other pages
- Page includes creator name, role, and project purpose
- Page matches the style and theme of the rest of the application

### User Story 3
**As a public health advocate, I can view comparative PM2.5 levels across all 12 monitoring sites so that I can identify which neighborhoods experience the poorest air quality.**

**Functional Requirements:**

**Requirement ID:** FR-003

**Description:**
- **Action:** The system should display a bar chart comparing average PM2.5 levels across all 12 monitoring sites.
- **Interface Elements:** 
  - Interactive bar chart with all 12 sites
  - Error bars showing standard deviation
  - Color coding based on EPA air quality categories
  - Optional filters for date range
- **Validation Rules:** 
  - Data must be validated for completeness before display
  - Missing data points should be clearly indicated
- **Data Requirements:** 
  - PM2.5 concentration data for all 12 sites
  - Site metadata (name, county)
  - EPA air quality category thresholds
- **Business Logic:** 
  - Calculate average and standard deviation of PM2.5 levels for each site
  - Sort sites from highest to lowest average PM2.5
  - Apply appropriate color coding based on AQI categories

**Priority:** High

**Acceptance Criteria:**
- All 12 monitoring sites are represented in the visualization
- Sites are sorted by average PM2.5 concentration for easy comparison
- Color coding matches EPA air quality index categories
- Hovering over a site shows detailed statistics
- Error bars indicate the variability of readings at each site

### User Story 4
**As a public health advocate, I can see daily PM2.5 trends for each monitoring site so that I can understand temporal patterns and identify concerning periods.**

**Functional Requirements:**

**Requirement ID:** FR-004

**Description:**
- **Action:** The system should display a multi-line chart showing PM2.5 levels over time for each monitoring site.
- **Interface Elements:** 
  - Interactive line chart with date range on x-axis
  - Multiple lines representing all 12 monitoring sites
  - Site selector to toggle visibility of individual lines
  - Date range selector
  - Weekend/weekday indicators
- **Validation Rules:** 
  - Date range must be valid
  - At least one site must be selected
- **Data Requirements:** 
  - Time series data of PM2.5 readings for all sites
  - Complete date range from dataset
  - Site identifiers and colors
- **Business Logic:** 
  - Filter data based on selected date range and sites
  - Calculate 7-day moving averages for trend smoothing
  - Highlight weekdays vs weekends
  - Identify and annotate significant anomalies

**Priority:** High

**Acceptance Criteria:**
- Line chart clearly shows daily PM2.5 trends for each site
- Users can select custom date ranges
- Users can toggle the visibility of individual sites
- Chart includes reference lines for EPA air quality thresholds
- Weekend days are visually distinguished from weekdays

### User Story 5
**As a public health advocate, I can view a map showing the geographic distribution of air quality measurements so that I can understand the spatial relationship between monitoring sites and their air quality readings.**

**Functional Requirements:**

**Requirement ID:** FR-005

**Description:**
- **Action:** The system should display an interactive map showing all 12 monitoring sites with color-coded markers based on air quality.
- **Interface Elements:** 
  - Interactive map of the Detroit metropolitan area
  - Color-coded markers for each monitoring site
  - Zoom and pan controls
  - Optional layers (e.g., county boundaries)
- **Validation Rules:** 
  - Map must load all site locations correctly
  - Color coding must accurately reflect air quality data
- **Data Requirements:** 
  - Geographic coordinates for all 12 sites
  - Average PM2.5 data for each site
  - Base map data
- **Business Logic:** 
  - Plot each site on the map using latitude and longitude
  - Calculate average PM2.5 levels for each site
  - Apply color coding based on EPA air quality categories
  - Generate informative tooltips with site statistics

**Priority:** High

**Acceptance Criteria:**
- All 12 monitoring sites are accurately placed on the map
- Marker colors reflect average PM2.5 levels
- Clicking on a marker shows detailed site information
- Map includes county boundaries for context
- The map is zoomable and pannable for exploring different areas

### User Story 6
**As a public health advocate, I can filter and compare specific monitoring sites so that I can perform detailed analyses of neighborhoods of interest.**

**Functional Requirements:**

**Requirement ID:** FR-006

**Description:**
- **Action:** The system should allow users to select and compare specific monitoring sites.
- **Interface Elements:** 
  - Site selection interface
  - Side-by-side or overlay comparison visualization
  - Summary statistics for selected sites
  - County and site type filters
- **Validation Rules:** 
  - At least two sites must be selected for comparison
  - Maximum of 5 sites can be compared at once
- **Data Requirements:** 
  - Complete data for all 12 sites
  - Site metadata (county, type, location description)
- **Business Logic:** 
  - Filter data based on selected sites
  - Calculate comparative statistics
  - Generate side-by-side visualizations
  - Highlight significant differences

**Priority:** Medium

**Acceptance Criteria:**
- Users can select multiple sites to compare from the complete list
- Comparison includes both visualizations and numeric statistics
- Differences are highlighted visually
- Information about site locations and characteristics is provided
- Users can reset selection and start a new comparison

### User Story 7
**As a public health advocate, I can download visualization images and data so that I can include them in presentations and reports to community members and policymakers.**

**Functional Requirements:**

**Requirement ID:** FR-007

**Description:**
- **Action:** The system should allow users to download visualizations as image files and raw data as CSV files.
- **Interface Elements:** 
  - Download buttons near each visualization
  - Format selection for images (PNG, JPG, SVG)
  - CSV download option for raw data
  - Optional title/caption input
- **Validation Rules:** N/A
- **Data Requirements:** 
  - Generated visualizations must be exportable
  - Raw data must be formattable as CSV
- **Business Logic:** 
  - Convert SVG or canvas elements to downloadable image format
  - Format selected data as CSV
  - Include metadata in file names

**Priority:** Low

**Acceptance Criteria:**
- Download buttons are clearly visible for each visualization
- Images are downloaded with appropriate quality for presentations
- CSV files include all relevant data columns
- File names include visualization type and date range
- Downloads work across major browsers

## Step 7: Prioritize Functional Requirements

### High Priority
- FR-001: UI for selecting data analyses and visualizations
- FR-003: View comparative PM2.5 levels across all 12 monitoring sites
- FR-004: See daily PM2.5 trends for each monitoring site
- FR-005: View geographic distribution of air quality measurements

### Medium Priority
- FR-002: About Me page
- FR-006: Filter and compare specific monitoring sites

### Low Priority
- FR-007: Download visualization images and data

## Step 8: Create Wireframes

### Homepage/Dashboard Wireframe
```
+--------------------------------------+
|  Detroit Air Quality Analyzer    🔍  |
+------+-------------------------------+
|      |                              |
| LOGO |  Air Quality at a Glance     |
+------+                              |
|      |  Last updated: Apr 5, 2025   |
| Home |                              |
|      |  [Dashboard Cards]           |
| Site |  +------------+ +----------+ |
| Comp |  | Site       | | Time     | |
|      |  | Comparison | | Trends   | |
| Time |  | [Preview]  | | [Preview]| |
| Trend|  +------------+ +----------+ |
|      |                              |
| Map  |  +------------+ +----------+ |
|      |  | Geographic | | AQI      | |
| AQI  |  | Map        | | Calendar | |
| Cal  |  | [Preview]  | | [Preview]| |
|      |  +------------+ +----------+ |
| About|                              |
|      |  [Key Metrics]               |
+------+  - Current AQI: 42 (Moderate)|
|      |  - Highest site: ELIZA-NR    |
| Help |  - Sites above threshold: 0  |
+------+-------------------------------+
|  Data source: EPA Air Quality System |
+--------------------------------------+
```

### Site Comparison Wireframe
```
+--------------------------------------+
|  Detroit Air Quality Analyzer    🔍  |
+------+-------------------------------+
|      |                              |
| LOGO |  Site Comparison             |
+------+-------------------------------+
|      |  Compare average PM2.5 levels |
| Home |  across all monitoring sites  |
|      |                              |
| Site |  [Filter Bar]                |
| Comp |  Date Range: [Jan ▼] to [Mar ▼]  |
|      |  County: [All Counties ▼]    |
| Time |  [Apply Filters] [Reset]     |
| Trend|                              |
|      |  [Interactive Bar Chart]     |
| Map  |  +---------------------------+|
|      |  |                          ||
| AQI  |  |  Average PM2.5 by Site   ||
| Cal  |  |                          ||
|      |  |  [Bars with error bars   ||
| About|  |   color-coded by AQI]    ||
|      |  |                          ||
+------+  +---------------------------+|
|      |                              |
| Help |  [Data Table - Sortable]     |
|      |  Site | County | Avg | Max  ||
+------+-------------------------------+
|  Download: [CSV] [PNG] [SVG]        |
+--------------------------------------+
```

### Time Trends Wireframe
```
+--------------------------------------+
|  Detroit Air Quality Analyzer    🔍  |
+------+-------------------------------+
|      |                              |
| LOGO |  Time Trend Analysis         |
+------+-------------------------------+
|      |  Track PM2.5 levels over time |
| Home |                              |
|      |  [Filter & Control Panel]    |
| Site |  Sites: [Select Sites ▼]     |
| Comp |  [✓] Site 1  [✓] Site 2     |
|      |  [✓] Site 3  [ ] Site 4     |
| Time |  [ ] Site 5  [ ] Site 6     |
| Trend|  Date: [Jan 1 ▼] to [Mar 31 ▼]|
|      |  [✓] 7-day average           |
| Map  |  [✓] Weekend highlighting    |
|      |  [Apply] [Reset]             |
| AQI  |                              |
| Cal  |  [Interactive Line Chart]    |
|      |  +---------------------------+|
| About|  |                          ||
|      |  |  PM2.5 Trends Over Time  ||
+------+  |                          ||
|      |  |  [Multi-line chart with  ||
| Help |  |   selectable lines]      ||
|      |  +---------------------------+|
+------+-------------------------------+
|  EPA AQI Thresholds [Show Legend]   |
+--------------------------------------+
```

### Geographic Map Wireframe
```
+--------------------------------------+
|  Detroit Air Quality Analyzer    🔍  |
+------+-------------------------------+
|      |                              |
| LOGO |  Geographic Distribution     |
+------+-------------------------------+
|      |  Explore air quality across  |
| Home |  the Detroit metro area      |
|      |                              |
| Site |  [Map Controls]              |
| Comp |  Time Period: [Q1 2025 ▼]    |
|      |  Data Type: [Avg PM2.5 ▼]    |
| Time |  [Zoom +] [Zoom -] [Reset]   |
| Trend|                              |
|      |  [Interactive Map]           |
| Map  |  +---------------------------+|
|      |  |                          ||
| AQI  |  |  Detroit Metro Area Map  ||
| Cal  |  |                          ||
|      |  |  [12 monitoring sites    ||
| About|  |   with color-coded       ||
|      |  |   markers]               ||
+------+  +---------------------------+|
|      |                              |
| Help |  [Legend]                    |
|      |  🟢 Good (0-12 µg/m³)        |
+------+  🟡 Moderate (12.1-35.4)     |
|         🟠 Unhealthy for Sensitive  |
|         🔴 Unhealthy (55.5+)        |
+--------------------------------------+
```

### Daily AQI Calendar Wireframe
```
+--------------------------------------+
|  Detroit Air Quality Analyzer    🔍  |
+------+-------------------------------+
|      |                              |
| LOGO |  Daily AQI Calendar          |
+------+-------------------------------+
|      |  View daily air quality      |
| Home |  patterns at each site       |
|      |                              |
| Site |  [View Controls]             |
| Comp |  Site: [All Sites ▼]         |
|      |  [✓] Show site average       |
| Time |  [ ] Show county average     |
| Trend|                              |
|      |  [Calendar Navigation]       |
| Map  |  < January 2025 >            |
|      |                              |
| AQI  |  S  M  T  W  T  F  S         |
| Cal  |  [Calendar grid with color-  |
|      |   coded cells by AQI value]  |
| About|                              |
|      |  [Month Statistics]          |
+------+  Cleanest day: Jan 6         |
|      |  Poorest day: Jan 10         |
| Help |  Average AQI: 42 (Moderate)  |
|      |                              |
+------+-------------------------------+
|  Click on any day for details       |
+--------------------------------------+
```

### About Me Wireframe
```
+--------------------------------------+
|  Detroit Air Quality Analyzer    🔍  |
+------+-------------------------------+
|      |                              |
| LOGO |  About the Creator           |
+------+-------------------------------+
|      |                              |
| Home |  [Profile Section]           |
|      |  +-------------------------+ |
| Site |  | [Profile Image]         | |
| Comp |  |                         | |
|      |  | Asim Williams           | |
| Time |  | Software Engineering    | |
| Trend|  | Instructor              | |
|      |  +-------------------------+ |
| Map  |                              |
|      |  [Project Information]       |
| AQI  |  Purpose:                    |
| Cal  |  To provide Detroit public   |
|      |  health advocates with tools |
| About|  to identify air quality     |
|      |  disparities and support     |
+------+  evidence-based advocacy.    |
|      |                              |
| Help |  [Technology Stack]          |
|      |  PostgreSQL • Express        |
+------+  React • Node.js             |
|                                     |
|  [Connect] [GitHub Repository]      |
+--------------------------------------+
```
