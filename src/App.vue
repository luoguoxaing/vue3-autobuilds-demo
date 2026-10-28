<template>
  <div class="resume">
    <!-- 头部：头像和基本信息 -->
    <header class="header">
      <div class="avatar-wrapper">
        <img 
          class="avatar" 
          :src="avatarUrl" 
          alt="个人头像"
          @error="handleAvatarError"
        />
      </div>
      <div class="info">
        <h1 class="name">罗先生</h1>
        <p class="title">软件开发工程师 · 退役军人</p>
        <div class="contact">
          <span>📧 1510083528@qq.com</span>
          <span>📱 135****4475</span>
          <span>🎖️ 解放军退役军人</span>
        </div>
      </div>
    </header>

    <!-- 主要内容区：两栏布局，手机下变为一栏 -->
    <main class="main-content">
      <!-- 左栏 / 上栏：工作经历 + 项目经验 -->
      <section class="left-column">
        <!-- 工作经历 -->
        <div class="section">
          <h2 class="section-title">💼 工作经历</h2>
          <div 
            v-for="(job, index) in workExperiences" 
            :key="'job-'+index"
            class="timeline-item"
          >
            <div class="timeline-header">
              <span class="timeline-title">{{ job.company }}</span>
              <span class="timeline-date">{{ job.period }}</span>
            </div>
            <p class="timeline-subtitle">{{ job.position }}</p>
            <ul class="timeline-desc">
              <li v-for="(item, i) in job.description" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>

        <!-- 项目经验 -->
        <div class="section">
          <h2 class="section-title">🚀 项目经验</h2>
          <div 
            v-for="(project, index) in projects" 
            :key="'project-'+index"
            class="timeline-item"
          >
            <div class="timeline-header">
              <span class="timeline-title">{{ project.name }}</span>
              <span class="timeline-date">{{ project.period }}</span>
            </div>
            <p class="timeline-subtitle">{{ project.role }}</p>
            <ul class="timeline-desc">
              <li v-for="(item, i) in project.description" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 右栏 / 下栏：教育背景 + 技术经验 + 个人兴趣 -->
      <section class="right-column">
        <!-- 教育背景 -->
        <div class="section">
          <h2 class="section-title">🎓 教育背景</h2>
          <div 
            v-for="(edu, index) in educations" 
            :key="'edu-'+index"
            class="timeline-item"
          >
            <div class="timeline-header">
              <span class="timeline-title">{{ edu.school }}</span>
              <span class="timeline-date">{{ edu.period }}</span>
            </div>
            <p class="timeline-subtitle">{{ edu.degree }} · {{ edu.major }}</p>
            <p v-if="edu.description" class="timeline-desc">{{ edu.description }}</p>
          </div>
        </div>

        <!-- 技术经验 -->
        <div class="section">
          <h2 class="section-title">🛠️ 技术经验</h2>
          <div class="skills">
            <span 
              v-for="(skill, index) in skills" 
              :key="'skill-'+index"
              class="skill-tag"
            >
              {{ skill }}
            </span>
          </div>
          <p class="skill-summary">{{ skillSummary }}</p>
        </div>

        <!-- 个人兴趣与研究方向 -->
        <div class="section">
          <h2 class="section-title">🔬 个人兴趣与研究</h2>
          <ul class="interest-list">
            <li v-for="(interest, index) in interests" :key="'interest-'+index">
              {{ interest }}
            </li>
          </ul>
        </div>

        <!-- 自我评价 -->
        <div class="section">
          <h2 class="section-title">📝 自我评价</h2>
          <p class="self-evaluation">{{ selfEvaluation }}</p>
        </div>
      </section>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} 罗先生 · 个人简历</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 头像图片 - 使用一个在线占位图，如果加载失败则显示默认文字头像
const avatarUrl = ref('https://picsum.photos/200/200?random=1');
// 头像加载失败时的回退处理
const handleAvatarError = (e) => {
  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="%234a6fa5"/%3E%3Ctext x="50%" y="50%" font-size="70" text-anchor="middle" dy=".3em" fill="white" font-family="Arial"%3E罗%3C/text%3E%3C/svg%3E';
};

// 工作经历数据
const workExperiences = ref([
  {
    company: '国有企业',
    position: '软件开发工程师',
    period: '至今',
    description: [
      '负责企业内部各类管理系统的前后端开发与维护工作，参与需求分析、技术选型与架构设计',
      '主导多个管理系统从0到1的开发交付，保障系统稳定运行与持续迭代',
      '作为团队技术骨干，推动Vue3、SpringBoot等技术栈在项目中的落地应用'
    ]
  }
]);

// 项目经验
const projects = ref([
  {
    name: '自动化拖拽表单引擎',
    role: '核心开发者',
    period: '项目经验',
    description: [
      '基于Vue3实现拖拽布局自动化表单功能，采用自定义VNode树 + 动态组件递归渲染的模板引擎架构',
      '支持用户通过拖拽完成表单布局与字段配置，大幅提升各项目常规表单填写与输入的开发效率',
      '内置自定义代码执行能力，使用 new Function 实现动态逻辑扩展，满足复杂业务场景下的自定义需求',
      '该方案已复用于多个项目，有效降低表单类页面的重复开发成本'
    ]
  },
  {
    name: '各类业务管理系统',
    role: '全栈开发',
    period: '项目经验',
    description: [
      '主导开发前后端分离的各类型业务管理系统，涵盖权限管理、数据统计、流程审批等核心模块',
      '集成ECharts图表实现数据大屏展示，为业务决策提供直观的可视化支持',
      '负责博物馆、纪念馆等场景的Web交互小游戏与展览展示效果开发，提升用户互动体验'
    ]
  },
  {
    name: '前端工具包与私有仓库建设',
    role: '工具链建设',
    period: '项目经验',
    description: [
      '熟练开发自定义前端工具包，并发布至npm私有仓库、Nexus私有仓库及GitHub等平台进行分发',
      '建立团队内部组件与工具复用机制，提升多项目协同开发效率与代码一致性'
    ]
  }
]);

// 教育背景
const educations = ref([
  {
    school: '上海第二工业大学',
    degree: '本科',
    major: '本科',
    period: '',
    description: '解放军退役军人'
  }
]);

// 技术经验技能标签
const skills = ref([
  'Vue3', 'Java', 'SpringBoot', '管理系统开发',
  '自定义VNode', '动态组件递归', '模板引擎', 'ECharts',
  '前端工具包', 'npm私有仓库', 'Nexus', 'GitHub',
  '前后端分离', '大屏可视化', 'Web交互小游戏'
]);

// 技术经验总结
const skillSummary = ref(
  '精通Vue3与Java SpringBoot技术栈，擅长各类管理系统的全栈开发。具备自定义前端工具包开发与私有仓库分发能力。个人能力强于前端，后端能力稍弱但可胜任常规开发需求。'
);

// 个人兴趣与研究方向
const interests = ref([
  '热衷于ESP32等单片机开发，已完成小型汽车机器人、四旋翼无人机等相关小成果',
  'Blender 3D建模技术研究，用于Web展示与3D打印',
  '熟练使用AI工具辅助开发，高效完成各类需求内容'
]);

// 自我评价
const selfEvaluation = ref(
  '解放军退役军人，具备严谨的工作作风与较强的执行力。精通Vue3、Java SpringBoot等管理系统开发技术，前端能力突出，后端可胜任常规开发。热衷技术钻研，在单片机、3D建模、AI辅助开发等领域持续探索，善于将新技术应用于实际项目，具备较强的学习能力与问题解决能力。'
);
</script>

<style scoped>
/* 全局样式与重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.resume {
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', system-ui, -apple-system, sans-serif;
  background-color: #f4f7fc;
  color: #1e2b3c;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px 20px;
  line-height: 1.6;
  min-height: 100vh;
  /* 确保整体内容靠左 */
  text-align: left;
}

/* 头部样式 */
.header {
  display: flex;
  align-items: center;
  gap: 28px;
  background: linear-gradient(135deg, #ffffff 0%, #f0f5ff 100%);
  border-radius: 28px;
  padding: 32px 36px;
  margin-bottom: 28px;
  box-shadow: 0 10px 25px -8px rgba(0, 20, 60, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  /* 头部内容左对齐 */
  text-align: left;
}

.avatar-wrapper {
  flex-shrink: 0;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 8px 18px rgba(0, 40, 100, 0.2);
  background-color: #4a6fa5;
  transition: transform 0.2s ease;
}

.avatar:hover {
  transform: scale(1.02);
}

.info {
  flex: 1;
  /* 确保文字信息靠左 */
  text-align: left;
}

.name {
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0b2545;
  margin-bottom: 6px;
  line-height: 1.2;
}

.title {
  font-size: 1.3rem;
  font-weight: 500;
  color: #2c5282;
  margin-bottom: 12px;
  display: inline-block;
  border-bottom: 3px solid #b6d7ff;
  padding-bottom: 4px;
}

.contact {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 28px;
  font-size: 0.95rem;
  color: #2d3e50;
  /* 联系方式靠左 */
  justify-content: flex-start;
}

.contact span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.6);
  padding: 4px 10px;
  border-radius: 30px;
  backdrop-filter: blur(2px);
}

/* 主要内容两栏布局 */
.main-content {
  display: flex;
  gap: 28px;
  margin-bottom: 28px;
  /* 内容左对齐 */
  text-align: left;
}

.left-column {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 28px;
  text-align: left;
}

.right-column {
  flex: 0.9;
  display: flex;
  flex-direction: column;
  gap: 28px;
  text-align: left;
}

/* 通用卡片区块 */
.section {
  background: white;
  border-radius: 24px;
  padding: 24px 28px;
  box-shadow: 0 6px 18px rgba(0, 20, 40, 0.06);
  transition: box-shadow 0.25s;
  border: 1px solid #e9eff7;
  /* 卡片内所有内容靠左 */
  text-align: left;
}

.section:hover {
  box-shadow: 0 14px 28px -6px rgba(0, 30, 70, 0.12);
}

.section-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #0b2b4a;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-left: 6px solid #2b6fae;
  padding-left: 16px;
  line-height: 1.3;
  /* 标题靠左 */
  justify-content: flex-start;
  text-align: left;
}

/* 时间线条目 */
.timeline-item {
  margin-bottom: 24px;
  border-left: 2px dashed #cbd9e9;
  padding-left: 18px;
  position: relative;
  /* 条目内容靠左 */
  text-align: left;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #2b6fae;
  border: 2px solid white;
  box-shadow: 0 0 0 2px #2b6fae50;
}

.timeline-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 6px;
  /* 标题行靠左 */
  text-align: left;
}

.timeline-title {
  font-weight: 700;
  font-size: 1.1rem;
  color: #123456;
  /* 公司/学校名靠左 */
  text-align: left;
}

.timeline-date {
  font-size: 0.85rem;
  color: #577590;
  background: #eef4fa;
  padding: 2px 12px;
  border-radius: 30px;
  font-weight: 500;
  white-space: nowrap;
  /* 日期也靠左（当换行时） */
  text-align: left;
}

.timeline-subtitle {
  font-weight: 600;
  color: #2b4b6f;
  margin-bottom: 8px;
  font-size: 0.98rem;
  /* 职位靠左 */
  text-align: left;
}

.timeline-desc {
  padding-left: 20px;
  font-size: 0.92rem;
  color: #2f4052;
  list-style-type: disc;
  /* 描述列表靠左 */
  text-align: left;
}

.timeline-desc li {
  margin-bottom: 6px;
  /* 列表项靠左 */
  text-align: left;
}

.timeline-desc p {
  font-size: 0.92rem;
  color: #2f4052;
  text-align: left;
}

/* 技能标签 */
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
  /* 标签靠左 */
  justify-content: flex-start;
  text-align: left;
}

.skill-tag {
  background: #e6f0ff;
  color: #0f3b6a;
  padding: 6px 16px;
  border-radius: 40px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.15s;
  border: 1px solid #caddf0;
  /* 单个标签靠左 */
  text-align: left;
}

.skill-tag:hover {
  background: #2b6fae;
  color: white;
  transform: translateY(-2px);
  border-color: #2b6fae;
}

.skill-summary {
  font-size: 0.95rem;
  color: #2f4052;
  background: #fafdff;
  padding: 14px 18px;
  border-radius: 16px;
  border-left: 4px solid #8db4dc;
  line-height: 1.7;
  /* 总结靠左 */
  text-align: left;
}

/* 兴趣列表 */
.interest-list {
  list-style: none;
  padding: 0;
  /* 列表靠左 */
  text-align: left;
}

.interest-list li {
  position: relative;
  padding-left: 28px;
  margin-bottom: 12px;
  font-size: 0.95rem;
  color: #2f4052;
  line-height: 1.6;
  /* 兴趣项靠左 */
  text-align: left;
}

.interest-list li::before {
  content: '✦';
  position: absolute;
  left: 4px;
  color: #2b6fae;
  font-size: 1.1rem;
}

/* 自我评价 */
.self-evaluation {
  font-size: 0.98rem;
  color: #2f4052;
  line-height: 1.7;
  background: #fafdff;
  padding: 12px 16px;
  border-radius: 16px;
  border-left: 4px solid #8db4dc;
  /* 评价靠左 */
  text-align: left;
}

/* 页脚 */
.footer {
  text-align: center;
  margin-top: 12px;
  padding: 16px 0 8px;
  color: #6f8aa8;
  font-size: 0.85rem;
  border-top: 1px solid #dae5f0;
}

/* ========== 移动端适配 (手机屏幕) ========== */
@media screen and (max-width: 760px) {
  .resume {
    padding: 16px 12px;
  }

  .header {
    flex-direction: column;
    text-align: left; /* 手机端也靠左 */
    align-items: flex-start; /* 头部元素靠左 */
    padding: 24px 18px;
    gap: 16px;
  }

  .avatar-wrapper {
    align-self: center; /* 头像居中显示，也可以保持左对齐 */
    /* 如果希望头像也靠左，可注释下面这行或改为 flex-start */
    align-self: flex-start;
  }

  .avatar {
    width: 100px;
    height: 100px;
  }

  .name {
    font-size: 2rem;
  }

  .title {
    font-size: 1.15rem;
  }

  .contact {
    justify-content: flex-start;
    gap: 10px 16px;
  }

  .main-content {
    flex-direction: column;
    gap: 20px;
  }

  .left-column,
  .right-column {
    flex: auto;
    gap: 20px;
  }

  .section {
    padding: 20px 18px;
    border-radius: 20px;
  }

  .section-title {
    font-size: 1.25rem;
    padding-left: 12px;
    border-left-width: 5px;
    margin-bottom: 16px;
  }

  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .timeline-date {
    align-self: flex-start;
    font-size: 0.8rem;
  }

  .timeline-title {
    font-size: 1rem;
  }

  .skill-tag {
    padding: 5px 12px;
    font-size: 0.8rem;
  }

  .self-evaluation {
    padding: 10px 14px;
    font-size: 0.92rem;
  }

  .skill-summary {
    padding: 12px 14px;
    font-size: 0.9rem;
  }

  .timeline-desc {
    font-size: 0.88rem;
    padding-left: 18px;
  }

  .interest-list li {
    font-size: 0.9rem;
    padding-left: 24px;
  }
}

/* 超小屏幕优化 */
@media screen and (max-width: 380px) {
  .contact span {
    font-size: 0.8rem;
    padding: 3px 8px;
  }

  .name {
    font-size: 1.8rem;
  }

  .section {
    padding: 16px 14px;
  }
}
</style>