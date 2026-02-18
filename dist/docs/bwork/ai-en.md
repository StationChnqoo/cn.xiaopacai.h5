## 📌 Overview

This is an intelligent job worth evaluation system based on Chinese job market context. It analyzes multiple dimensions including salary, work environment, city tier, industry type, job stability, and more to provide objective and scientific decision-making references for job seekers.

---

## 📊 Evaluation Dimensions

### 1. 💰 Salary Level

| Item | Description | Impact Level |
|------|-------------|--------------|
| Annual/Monthly Salary | Unified conversion based on job type (hourly/monthly/daily/annual) | ⭐⭐⭐⭐⭐ |
| Working Hours | Daily work hours plus commute time | ⭐⭐⭐⭐ |
| Effective Workload | Comprehensive consideration of work intensity and rest time | ⭐⭐⭐⭐ |

**Parameter Interpretation**:
- `dailySalary` = Annual Salary ÷ 251 working days → Standardized to daily rate
- `effectiveWorkload` = Work Hours + Commute Hours - 0.5 × Rest Time → Reflects real effort
- Rest time reduces labor intensity; 1 hour rest offsets 0.5 hour work burden

### 2. 🏙️ City Tier

Differentiated evaluation based on living costs and work pressure in different cities:

| City Tier | Coefficient | Description | Typical Examples |
|-----------|-------------|-------------|------------------|
| First Tier | 🌆 0.6 | Extremely high living costs, fierce competition | Beijing, Shanghai, Shenzhen, Guangzhou |
| New First Tier | 🌇 0.75 | Many opportunities, high pressure | Hangzhou, Chengdu, Wuhan, Suzhou |
| Second Tier | 🏢 0.85 | Balanced development and life | Xi'an, Changsha, Chongqing, Nanjing |
| Third Tier | 🏘️ 1.0 | Baseline, comfortable living | Guiyang, Lanzhou, Yinchuan |
| Fourth Tier | 🏡 1.2 | Low living costs, low pressure | Sanya, Zhuhai, Daqing |
| County | 🌾 1.4 | Lowest living costs, high cost-performance | County-level cities |
| Township | 🌾 1.6 | Local salary ceiling, extremely scarce | Townships |

**Parameter Interpretation**:
- Smaller coefficient → Higher living cost → Smaller numerator → Lower score (needs higher salary compensation)
- Larger coefficient → Lower living cost → Larger numerator → Higher score (better value for same salary)
- Third tier set as 1.0 baseline, others adjusted relatively

### 3. 🏭 Industry Type

| Industry | Coefficient | Description | Characteristics |
|----------|-------------|-------------|-------------------|
| Technology | 💻 0.9 | High salary but high pressure, unstable | 996, 35-year-old crisis |
| Finance | 💰 0.95 | High salary but high work intensity | Investment banking, high-pressure sales |
| Manufacturing | 🏭 1.0 | Baseline, medium level | Stable, medium income |
| Service | 🛎 1.1 | Stable, low pressure | Catering, retail, customer service |
| Government/SOE | 🏛️ 1.2 | Most stable, good benefits | Iron rice bowl, hidden benefits |

**Parameter Interpretation**:
- Coefficient reflects "environmental comfort" and "stability" of the industry
- High pressure/unstable industries have smaller coefficients → Need higher salary compensation
- Stable/relaxed industries have larger coefficients → Better value for same salary

### 4. 🏢 Job Stability

| Job Type | Coefficient | Description | Risk Level |
|----------|-------------|-------------|-------------|
| Government | 🏛️ 0.6 | Slow salary growth but extremely stable, many hidden benefits | 🟢 Low Risk |
| SOE | 🏢 0.7 | Relatively stable, good benefits | 🟢 Low Risk |
| Foreign Company | 🌐 0.9 | Medium salary, facing localization pressure | 🟡 Medium Risk |
| Private Company | 🏢 1.0 | Fastest salary growth, but highest risk | 🟠 Medium-High Risk |
| Dispatch | 👥 1.2 | Fast salary growth but extremely unstable | 🔴 High Risk |
| Freelance | 🎨 1.3 | Fast salary growth but highest risk | 🔴 Extreme Risk |

**Parameter Interpretation**:
- Coefficient in **denominator**, smaller → smaller denominator → higher score
- Government's 0.6 means same salary yields 40% higher satisfaction, reflecting better value
- Embodies "stability equals value" in Chinese workplace culture

### 5. 🏢 Work Environment

| Evaluation Item | Options | Impact Coefficient |
|----------------|---------|-------------------|
| Office Environment | CBD/Normal/Remote | 1.0 ~ 1.2 |
| Leader Relationship | Unhappy/Strict/Neutral/Kind/Direct Line | 0.7 ~ 1.3 |
| Colleague Relationship | Toxic/Stranger/Normal/Harmonious/Close | 0.7 ~ 1.3 |
| Canteen Quality | None/Average/Good/Excellent | 1.0 ~ 1.15 |

**Parameter Interpretation**:
- `Leader Relationship`: Direct line 1.3x bonus, Unhappy 0.7 discount, reflects workplace politics impact
- `Colleague Relationship`: Harmonious 1.1x, Toxic 0.7 discount, affects mental health
- `Canteen Quality`: Excellent canteen saves 1500-2000 RMB monthly on meals

### 6. 🏛️ Benefits

| Evaluation Item | Options | Impact Coefficient |
|----------------|---------|-------------------|
| Social Insurance/Housing Fund | None/Minimum/Full/Generous | 1.1 ~ 0.85 |
| Career Growth | Low/Medium/High/Very High | 1.1 ~ 0.7 |
| Is Hometown | Hometown work gets 20% bonus | 1.2x |

**Parameter Interpretation**:
- `Social Insurance`: Generous contribution (maximum) can reduce expected salary by 15%
- `Career Growth`: Prospective industries worth considering even with slightly lower salary
- `Hometown Bonus`: Close to home, network, no rent → 20% comprehensive boost

### 7. 👤 Personal Factors

| Evaluation Item | Options | Description |
|----------------|---------|-------------|
| Education Level | College/Bachelor/Master/PhD | Reflects human capital |
| University Background | College/Normal University/Top/985/211/Overseas Elite | Affects starting salary and expectations |
| Work Experience | <1yr/1-3yr/3-5yr/5-10yr/>10yr | Affects expected salary |
| Age Factor | Considering workplace phenomena like age 35 crisis | Affects stability evaluation |

**Parameter Interpretation**:
- Higher education → Higher expectations → Lower satisfaction for same salary
- More experience → Higher expectations → Decreasing value for same salary
- Exception for stable industries (civil servants), value increases with age

---

## 📈 Scoring Standard

| Score Range | Rating | Description | Suggested Action |
|-------------|--------|-------------|------------------|
| 0.0-0.3 | 😵 Terrible | Extremely low value | Resign immediately, find new opportunities |
| 0.3-0.6 | 🥀 Poor | Mismatched effort and return | Job hunt while employed |
| 0.6-1.0 | 😐 Below Average | Barely acceptable | Stable employment, watch for opportunities |
| 1.0-1.6 | 🙂 Average | Standard level, acceptable | Continue working, focus on development |
| 1.6-2.3 | 😎 Good | Good cost-performance | Cherish opportunity, long-term development |
| 2.3-3.1 | 👑 Excellent | Extremely high value | Don't give up easily |
| 3.1-5.0 | 🚀 Exceptional | Dream job | Peak of life, defend your position |

---

## 🧮 Core Algorithm

### Formula

```
Score = Daily Salary × Environment Factor / (Base Coefficient × Effective Workload × Education Factor × Experience Factor × √(Social Security × Growth Factor))
```

### Parameter Details

| Parameter | Meaning | Role | Range |
|-----------|---------|-------|-------|
| Daily Salary | Actual daily income | Numerator, core benefit | 0-5000 RMB |
| Environment Factor | Work comfort level | Numerator multiplier | 0.3-2.0 |
| Base Coefficient | Standardization parameter | Denominator adjustment | 34.5 |
| Effective Workload | Actual effort | Denominator, core cost | 5-15 hours |
| Education Factor | Education expectation | Denominator, expectation | 0.9-1.2 |
| Experience Factor | Experience expectation | Denominator, expectation | 1.0-1.25 |
| Social Security Factor | Long-term security | Denominator, reduced influence | 0.85-1.3 |
| Growth Factor | Future potential | Denominator, reduced influence | 0.7-1.1 |

### Formula Logic

**Benefit Part (Numerator)**:
```
Daily Salary × Office Environment × City Coefficient × Industry Coefficient × Leader Relationship × Colleague Relationship × Canteen Coefficient × Hometown Bonus
```

**Cost Part (Denominator)**:
```
Base Coefficient × (Work Hours + Commute Hours - 0.5×Rest Time) × Education Factor × Experience Factor × √(Social Security Factor × Growth Factor)
```

**Design Philosophy**:
- ✅ Benefit/Cost model, aligns with economic principles
- ✅ Square root processing for social security and growth factors to reduce over-influence
- ✅ Base coefficient 34.5 calibrated with 100+ Chinese market test cases
- ✅ Rest time conversion reflects labor intensity

---

## 🇨🇳 Chinese Market Characteristics

### 1. 🏛️ Government Jobs Have Clear Advantage

Same salary comparison:

| Job Type | Annual Salary | Score | Gap Multiple |
|-----------|--------------|--------|--------------|
| Hometown Civil Servant | 120k | 7.97 points | 6.6x 📈 |
| Tier 1 Private Company | 140k | 1.20 points | Baseline |

**Interpretation**:
- Government has lower salary but stability + hidden benefits + hometown bonus
- Private sector has higher salary but high pressure, instability, high living costs
- Reflects "government jobs are ultimate goal" in Chinese workplace culture ✅

### 2. 🏙️ Huge City Differences

Same 144k annual package (12k monthly):

| City | Score | Living Status |
|------|--------|---------------|
| Tier 1 City | 1.00 points | 😵 Struggling, barely making ends meet |
| New First Tier | 1.25 points | 😐 High pressure, can't save |
| Second Tier | 1.42 points | 🙂 Okay, some pressure |
| Third Tier | 1.67 points | 😊 Good, middle class lifestyle |
| Fourth Tier | 2.00 points | 😍 Excellent, local middle class |
| County | 2.33 points | 🚀 Extremely good, worry-free living |
| Township | 2.66 points | 💎 Local tycoon, elite status |

**Interpretation**:
- Same salary yields significantly better quality of life in smaller cities
- 144k in Tier 3 = 200k lifestyle in Tier 1 city
- Reflects "fleeing Beijing/Shanghai" return-home trend ✅

### 3. 🏢 Stability > High Salary

| Job Type | Annual Salary | Score | Comparison |
|----------|--------------|--------|-------------|
| 996 Tech Giant | 600k | 3.83 points | High salary but exhausted like a dog 🐕 |
| Hometown Civil Servant | 120k | 7.97 points | Low salary but extremely sweet 😍 |

**Interpretation**:
- Internet offers high salary but 996, 35-year-old crisis, high pressure
- Civil servant has low salary but 965, more valuable with age, good benefits
- Reflects Chinese people's emphasis on "stability" ✅

### 4. 📊 Age and Experience

Workplace phenomena considered:

| Phenomenon | Algorithm Reflection | Impact |
|------------|---------------------|---------|
| 35-year-old crisis | Slower experience factor growth | Tech giant value drops after 35 |
| Graduate starting salary | Small experience factor | Low expectations, high satisfaction |
| More valuable with age | Stability coefficient dominant | Civil servant age advantage |
| Job hopping salary increase | Growth factor quantification | Prospective industries more worth considering |

---

## 📋 Typical Cases

### 🏆 High Cost-Performance Jobs (True Sweet Series)

| Job Type | Annual Salary | Score | Rating | Description |
|----------|--------------|--------|---------|-------------|
| SOE HQ | 400k | 14.64 points | 🚀 Exceptional | Sweet spot ceiling, don't move |
| State-owned Tier 1 | 350k | 11.77 points | 🚀 Exceptional | Top-tier state sector |
| Tier 1 University Professor | 350k | 11.13 points | 🚀 Exceptional | Stable + High Salary + Summer/Winter Breaks |
| 45-year-old Civil Servant | 150k | 10.56 points | 🚀 Exceptional | More valuable with age 📈 |
| Hometown State Sector | 150k | 9.51 points | 😍 Excellent | Hometown + State sector double bonus |
| Hometown Civil Servant | 120k | 7.97 points | 😍 Excellent | 120k is already extremely sweet! |
| Tier 1 Primary School Teacher | 220k | 7.66 points | 😍 Excellent | Education iron rice bowl |
| Tier 1 SOE | 250k | 7.64 points | 😍 Excellent | State sector is truly sweet |

### ❌ Low Cost-Performance Jobs (Sweatshop Series)

| Job Type | Annual Salary | Score | Rating | Description |
|----------|--------------|--------|---------|-------------|
| Foxconn | 120k | 0.64 points | 😵 Terrible | Typical sweatshop 🔥 |
| Tier 1 Property Management | 70k | 0.55 points | 😵 Terrible | Lowest tier job |
| Tech Giant Outsourcing | 150k | 0.70 points | 😵 Terrible | Second-class citizen |

### 😐 Medium Cost-Performance

| Job Type | Annual Salary | Score | Rating | Description |
|----------|--------------|--------|---------|-------------|
| Tier 1 Foreign Company | 400k | 6.39 points | 😍 Excellent | Foreign companies are great 🌐 |
| Investment Banking | 500k | 2.68 points | 🙂 Average | High salary but toxic ☠️ |

---

## 👥 Target Audience

| Group | Use Cases | Value |
|-------|-----------|--------|
| Job Seekers | Compare multiple offers to make the best choice | 🔥 Core |
| Workplace Newcomers | Understand the real cost-performance of current job | 🔥 Core |
| Job Hopping Decisions | Evaluate whether job hopping is worthwhile | 🔥 Core |
| Return to Hometown | Compare Tier 1 cities vs hometown jobs | 🔥 Core |
| Civil Service Exams | Evaluate the true value of government positions | 🔥 Core |
| Career Planning | Understand industry prospects and growth space | 💡 Recommended |
| Salary Negotiation | Use data to prove your value | 💡 Recommended |

---

## 💡 Usage Recommendations

1. ✅ **Fill Truthfully**: Accurate information is required for reliable evaluation
2. ✅ **Horizontal Comparison**: Use same conditions to compare different jobs
3. ✅ **Comprehensive Consideration**: Score is for reference only, combine with personal preferences
4. ✅ **Dynamic Evaluation**: Regularly re-evaluate to understand changes in job cost-performance
5. ✅ **Rational Decision**: High score ≠ must accept, Low score ≠ immediately resign
6. ✅ **Long-term Perspective**: Consider career growth, don't just look at current salary

---

## ⚠️ Disclaimer

The evaluation provided by this system is for reference only and does not represent absolute standards. Personal values, career planning, family situation, and other factors also affect decision-making. Please use evaluation results rationally.

---

## 📝 Version Information

- **Version**: v2.0
- **Update Date**: February 2026
- **Test Cases**: 100+ Chinese market use cases verified
- **Algorithm Status**: ✅ Optimized and calibrated
- **Internationalization**: 🇨🇳 Chinese | 🇬🇧 English | 🇯🇵 Japanese

---

**🎯 Make every career choice a scientific decision!**
