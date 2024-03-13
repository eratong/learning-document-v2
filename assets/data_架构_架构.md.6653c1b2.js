import{_ as s,o as a,c as n,X as l}from"./chunks/framework.b5656a4e.js";const o="/assets/image11.efec71e7.png",p="/assets/image12.30ea3e76.png",e="/assets/image10.16698227.png",t="/assets/image-20220331162756182.5de4c91f.png",r="/assets/image8.2bc67c97.png",c="/assets/image9.77d4ac60.png",D="/assets/image3.8cfb796a.png",A="/assets/image2.7f5382a3.png",y="/assets/image5.560db638.png",i="/assets/image6.7daac887.png",F="/assets/image1.4f524259.png",C="/assets/image-20220428182014200.d30b8a9f.png",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAB4CAIAAACb/RtTAAABMklEQVR4nO3TIQHAMBDAwF9FlZTMv6qSeNjAnYKQPPu8A8ysrwPgL8wAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPEDBAzQMwAMQPkAj96AaEGvY6UAAAAAElFTkSuQmCC",x=JSON.parse('{"title":"架构","description":"","frontmatter":{},"headers":[],"relativePath":"data/架构/架构.md","filePath":"data/架构/架构.md","lastUpdated":1699253775000}'),d={name:"data/架构/架构.md"},u=l('<h1 id="架构" tabindex="-1">架构 <a class="header-anchor" href="#架构" aria-label="Permalink to &quot;架构&quot;">​</a></h1><h2 id="软件架构风格" tabindex="-1">软件架构风格 <a class="header-anchor" href="#软件架构风格" aria-label="Permalink to &quot;软件架构风格&quot;">​</a></h2><h3 id="单体服务" tabindex="-1">单体服务 <a class="header-anchor" href="#单体服务" aria-label="Permalink to &quot;单体服务&quot;">​</a></h3><p>单体服务（Monolithic Service）：在单体服务架构中，整个应用程序被作为一个单一的、紧密耦合的单元进行开发、部署和扩展。所有的功能模块都运行在同一个进程中，共享相同的数据库和资源。这种架构适用于较小规模的应用程序，但随着应用程序的增长和复杂性的提高，单体服务可能会导致开发困难、部署复杂以及难以扩展等问题。</p><h3 id="soa" tabindex="-1">SOA <a class="header-anchor" href="#soa" aria-label="Permalink to &quot;SOA&quot;">​</a></h3><p><strong>面向服务的架构</strong>已成为连接复杂服务系统的主要解决方案，可以采用单体服务或微服务的方式来实现<br> SOA（Service-Oriented Architecture）：SOA是一种面向服务的架构，将应用程序划分为一组相互独立、可重用的服务。每个服务代表一个特定的业务功能，通过标准化的接口进行通信。SOA注重服务的松耦合和可复用性，并通过中间件来实现服务之间的交互。SOA可以在单体服务和微服务之间形成过渡，但SOA本身并不要求使用微服务架构。</p><h3 id="微服务" tabindex="-1">微服务 <a class="header-anchor" href="#微服务" aria-label="Permalink to &quot;微服务&quot;">​</a></h3><p>微服务（Microservices）：微服务架构是一种将应用程序拆分为一组小型、独立的服务的架构风格。每个服务都运行在自己的进程中，并通过轻量级的通信机制进行交互。微服务架构强调服务的自治性、可替换性和可独立部署性，使得开发团队能够独立地开发、部署和扩展各个服务。微服务架构适用于大型、复杂的应用程序，可以提供更高的可伸缩性和灵活性。</p><h2 id="云计算服务模型" tabindex="-1">云计算服务模型 <a class="header-anchor" href="#云计算服务模型" aria-label="Permalink to &quot;云计算服务模型&quot;">​</a></h2><h4 id="iaas" tabindex="-1">IAAS <a class="header-anchor" href="#iaas" aria-label="Permalink to &quot;IAAS&quot;">​</a></h4><p>IAAS（基础设施即服务）：Infrastructure-as-a-service 提供基础的计算资源，如虚拟机、存储空间和网络等。用户可以通过IAAS获得灵活的计算能力，而无需管理底层的基础设施。IAAS通常由云服务提供商提供，用户可以根据需要按需使用资源，并支付相应的费用。</p><h4 id="paas" tabindex="-1">PAAS <a class="header-anchor" href="#paas" aria-label="Permalink to &quot;PAAS&quot;">​</a></h4><p>PAAS（平台即服务）：Platform-as-a-service 提供一个完整的开发和运行环境，使开发者能够开发、测试和部署应用程序。PAAS包括操作系统、数据库、开发工具和服务器等组件，开发者可以专注于应用程序的开发，而无需关心底层的硬件和软件基础设施。</p><h4 id="saas" tabindex="-1">SAAS <a class="header-anchor" href="#saas" aria-label="Permalink to &quot;SAAS&quot;">​</a></h4><p>SAAS（软件即服务）：Software-as-a-service 以云服务的形式提供软件应用程序。用户可以通过互联网访问和使用应用程序，而无需安装和维护软件。SAAS通常以订阅的方式提供，用户可以根据需要选择使用特定的软件服务，并按照订阅费用进行付费。</p><h2 id="架构模式" tabindex="-1">架构模式 <a class="header-anchor" href="#架构模式" aria-label="Permalink to &quot;架构模式&quot;">​</a></h2><h3 id="mvc架构" tabindex="-1">MVC架构 <a class="header-anchor" href="#mvc架构" aria-label="Permalink to &quot;MVC架构&quot;">​</a></h3><p><strong>模型-视图-控制器（Model-View-Controller，简称MVC）</strong> 是一种软件架构模式，用于实现用户界面和应用程序逻辑的分离。实现可维护、可扩展和可重用的代码结构。在MVC中，</p><blockquote><p><strong>模型（Model）</strong> 表示应用程序的数据和业务逻辑<br><strong>视图（View）</strong> 负责呈现模型的数据给用户<br><strong>控制器（Controller）</strong> 接收并处理用户的输入，并更新模型和视图</p></blockquote><p><img src="'+o+'" alt="image"><img src="'+p+'" alt="image"></p><h3 id="ddd架构" tabindex="-1">DDD架构 <a class="header-anchor" href="#ddd架构" aria-label="Permalink to &quot;DDD架构&quot;">​</a></h3><p><strong>领域驱动设计（Domain-Driven Design，简称DDD）</strong> 软件核心复杂性应对之道<br> 将应用看成是领域之间的组合，让架构调整贯穿整个项目周期，目的是为了复杂业务系统拆分，前期设计的不好，后期会很难拆分，这种设计是04年提出来的，15年往后微服务火了之后才进入大家视野<br> DDD和MVC并不是相互排斥的选择，而是可以根据具体情况进行组合使用</p><h4 id="cola框架" tabindex="-1">cola框架 <a class="header-anchor" href="#cola框架" aria-label="Permalink to &quot;cola框架&quot;">​</a></h4><p><strong>整洁面向对象架构</strong><br> 是阿里巴巴开发的一套 Java 开发框架，用于构建微服务架构、分布式架构和领域驱动设计（DDD）的应用程序。COLA 框架提供了一套约定和最佳实践，帮助开发人员快速构建高质量、可扩展和易维护的应用程序。该框架包含了一系列的设计原则、标准的代码结构和组织方式，以及配套的工具和库。</p><p><img src="'+e+'" alt="image"></p><p>参考资料<br><a href="https://blog.csdn.net/significantfrank/article/details/110934799" target="_blank" rel="noreferrer">https://blog.csdn.net/significantfrank/article/details/110934799</a></p><h3 id="脚手架" tabindex="-1">脚手架 <a class="header-anchor" href="#脚手架" aria-label="Permalink to &quot;脚手架&quot;">​</a></h3><h2 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h2><h3 id="常用包名" tabindex="-1">常用包名 <a class="header-anchor" href="#常用包名" aria-label="Permalink to &quot;常用包名&quot;">​</a></h3><h4 id="manager" tabindex="-1">manager <a class="header-anchor" href="#manager" aria-label="Permalink to &quot;manager&quot;">​</a></h4><blockquote><p>描述：通用业务处理层<br> 特征:<br><strong>三方封装</strong> 对第三方平台封装的层，预处理返回结果及转化异常信息<br><strong>通用下沉</strong> 对Service层通用能力的下沉，如缓存方案、中间件通用处理<br><strong>组合多dao</strong> 与DAO层交互，对多个DAO的组合复用。</p><p><br><img src="'+t+`" alt="image-20220331162756182"></p></blockquote><h3 id="项目分层案例" tabindex="-1">项目分层案例 <a class="header-anchor" href="#项目分层案例" aria-label="Permalink to &quot;项目分层案例&quot;">​</a></h3><h4 id="基础分层" tabindex="-1">基础分层 <a class="header-anchor" href="#基础分层" aria-label="Permalink to &quot;基础分层&quot;">​</a></h4><blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── src</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">main</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── java</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── com</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ontg</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">service</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">pojo</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mapper</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">        └── StartApplication</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">java</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── resources</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mapper</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── application</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yml</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    └── logback</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── pom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span></code></pre></div></blockquote><h4 id="小项目分层" tabindex="-1">小项目分层 <a class="header-anchor" href="#小项目分层" aria-label="Permalink to &quot;小项目分层&quot;">​</a></h4><blockquote><p>虽然放在同一个项目包下、各个module互相不影响，各个module都是单独的小项目<br> 优点: 汇总在一个项目下方便管理<br> 缺点: 部署要特殊处理</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── module1</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── module2</span></span></code></pre></div></blockquote><h4 id="公用service分层" tabindex="-1">公用service分层 <a class="header-anchor" href="#公用service分层" aria-label="Permalink to &quot;公用service分层&quot;">​</a></h4><blockquote><p>优点: 多个项目共用service,方法之间共用，减少代码重复冗余<br> 缺点: <br> 代码改动项目之间会互相影响，每次改动需要考虑全面<br> 不断迭代多个项目功能代码写一起太多太乱、不好拆分</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── module1 </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">—— </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">controller2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">—— StartApplication1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">java</span></span>
<span class="line"><span style="color:#A6ACCD;">      └── pom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">xml</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">引用moudule公用包</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── module2 </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">—— </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">controller2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">—— StartApplication2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">java</span></span>
<span class="line"><span style="color:#A6ACCD;">      └── pom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">xml</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">引用moudule公用包</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">── moudule公用包   </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">—— </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">service</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">—— </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mapper</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">—— 等等</span></span></code></pre></div></blockquote><p><img src="`+r+'" alt="Alt text"><img src="'+c+'" alt="Alt text"></p><p>参考资料:<br><a href="https://zhuanlan.zhihu.com/p/627568742" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/627568742</a></p><h2 id="uml类图" tabindex="-1">UML类图 <a class="header-anchor" href="#uml类图" aria-label="Permalink to &quot;UML类图&quot;">​</a></h2><h2 id="防止灾难性雪崩效应方案" tabindex="-1">防止灾难性雪崩效应方案 <a class="header-anchor" href="#防止灾难性雪崩效应方案" aria-label="Permalink to &quot;防止灾难性雪崩效应方案&quot;">​</a></h2><h3 id="降级" tabindex="-1">降级 <a class="header-anchor" href="#降级" aria-label="Permalink to &quot;降级&quot;">​</a></h3><p>超时降级、资源不足时(线程或信号量)降级,降级后可以配合降级接口返回<strong>托底数据</strong>,实现一个fallback方法，当请求后端服务出现异常时，使用fallback方法返回值 （访问发生异常返回托底数据）</p><h3 id="限流" tabindex="-1">限流 <a class="header-anchor" href="#限流" aria-label="Permalink to &quot;限流&quot;">​</a></h3><h4 id="算法" tabindex="-1">算法 <a class="header-anchor" href="#算法" aria-label="Permalink to &quot;算法&quot;">​</a></h4><h5 id="固定窗口计数器" tabindex="-1">固定窗口计数器 <a class="header-anchor" href="#固定窗口计数器" aria-label="Permalink to &quot;固定窗口计数器&quot;">​</a></h5><p>描述:<br> 计数器算法是使用计数器在周期内累加访问次数，当达到设定的限流值时，触发限流策略。下一个周期开始时，进行清零，重新计数<br> 缺点:<br> 这个算法通常用于QPS限流和统计总访问量，对于秒级以上的时间周期来说，会存在一个非常严重的问题，那就是临界问题 <img src="'+D+'" alt="Alt text"></p><h5 id="滑动窗口计数器" tabindex="-1">滑动窗口计数器 <a class="header-anchor" href="#滑动窗口计数器" aria-label="Permalink to &quot;滑动窗口计数器&quot;">​</a></h5><p>描述:<br> 滑动窗口算法是将时间周期分为N个小周期，分别记录每个小周期内访问次数，并且根据时间滑动删除过期的小周期。<br> 如下图，假设时间周期为1min，将1min再分为2个小周期，统计每个小周期的访问数量，则可以看到，第一个时间周期内，访问数量为75，第二个时间周期内，访问数量为100，超过100的访问则被限流掉了<br><img src="'+A+'" alt="Alt text"> 当滑动窗口的格子划分地越多，那么滑动窗口的滚动就越平滑，限流的统计就会越精确</p><h5 id="漏桶" tabindex="-1">漏桶 <a class="header-anchor" href="#漏桶" aria-label="Permalink to &quot;漏桶&quot;">​</a></h5><p>描述:<br> 漏桶算法是访问请求到达时直接放入漏桶，如当前容量已达到上限（限流值），则进行丢弃（触发限流策略）。漏桶以固定的速率进行释放访问请求（即请求通过），直到漏桶为空。<br><img src="'+y+'" alt="Alt text"> 消息队列、jdk的线程池，都有类似的设计。<br> (固定速率输出)</p><h5 id="令牌桶" tabindex="-1">令牌桶 <a class="header-anchor" href="#令牌桶" aria-label="Permalink to &quot;令牌桶&quot;">​</a></h5><p>令牌桶算法是程序以r（r=时间周期/限流值）的速度向令牌桶中增加令牌，直到令牌桶满，请求到达时向令牌桶请求令牌，如获取到令牌则通过请求，否则触发限流策略 <img src="'+i+`" alt="Alt text"> (精细处理，平滑限流)</p><p>漏桶算法通过固定速率的流出来控制请求的处理速度，而令牌桶算法则通过固定速率生成令牌来决定是否处理请求。漏桶算法对请求进行了平均化处理，而令牌桶算法可以实现更精细的请求控制</p><h4 id="sentinel" tabindex="-1">sentinel <a class="header-anchor" href="#sentinel" aria-label="Permalink to &quot;sentinel&quot;">​</a></h4><p>官网 <a href="https://sentinelguard.io/zh-cn/docs/quick-start.html" target="_blank" rel="noreferrer">https://sentinelguard.io/zh-cn/docs/quick-start.html</a></p><p>java项目使用 导包</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">com.alibaba.cloud</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">spring-cloud-starter-alibaba-sentinel</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">com.alibaba.csp</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">sentinel-datasource-apollo</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>配置</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 限流配置</span></span>
<span class="line"><span style="color:#A6ACCD;"># app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id是项目本身就有的</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 默认走的是application</span></span>
<span class="line"><span style="color:#A6ACCD;">spring</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sentinel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">datasource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">flow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">apollo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">namespaceName</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">application</span></span>
<span class="line"><span style="color:#A6ACCD;"># 默认可以在application中配置flowRules</span></span>
<span class="line"><span style="color:#A6ACCD;">spring</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sentinel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">datasource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">flow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">apollo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">flowRulesKey</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">flowRules</span></span>
<span class="line"><span style="color:#A6ACCD;"># 标记改配置是限流规则</span></span>
<span class="line"><span style="color:#A6ACCD;">spring</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sentinel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">datasource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">flow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">apollo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rule</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">flow</span></span>
<span class="line"><span style="color:#A6ACCD;">    flowRules</span><span style="color:#89DDFF;">=[{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resource</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grade</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">},{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resource</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abc1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grade</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}]</span></span>
<span class="line"><span style="color:#A6ACCD;">    resource为资源</span></span>
<span class="line"><span style="color:#A6ACCD;">    grade为类型</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 1代表qps</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0代表线程数</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 建议用1</span></span>
<span class="line"><span style="color:#A6ACCD;">    count为阈值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 熔断配置</span></span>
<span class="line"><span style="color:#A6ACCD;"># app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id是项目本身就有的</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 默认走的是application</span></span>
<span class="line"><span style="color:#A6ACCD;">spring</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sentinel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">datasource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">degrade</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">apollo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">namespaceName</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">application</span></span>
<span class="line"><span style="color:#A6ACCD;"># 默认可以在application中配置flowRules</span></span>
<span class="line"><span style="color:#A6ACCD;">spring</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sentinel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">datasource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">degrade</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">apollo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">flowRulesKey</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">degradeRules</span></span>
<span class="line"><span style="color:#A6ACCD;"># 标记改配置是限流规则</span></span>
<span class="line"><span style="color:#A6ACCD;">spring</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sentinel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">datasource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">degrade</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">apollo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rule</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">degrade</span></span>
<span class="line"><span style="color:#A6ACCD;">    degradeRules</span><span style="color:#89DDFF;">=[{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resource</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">GET:http://localhost:8080/echo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grade</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">timeWindow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">},{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resource</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/entrance</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grade</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">timeWindow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}]</span></span>
<span class="line"><span style="color:#A6ACCD;">    resource为资源</span></span>
<span class="line"><span style="color:#A6ACCD;">    grade为类型</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 1代表1秒异常率</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">0为1秒慢请求数</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">2为60s异常数</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">异常率更为通用</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">没有特殊使用建议用1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    count</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 当grade为1时</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">5代表 </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">异常率</span></span>
<span class="line"><span style="color:#A6ACCD;">    timeWindow</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 发生熔断后多久会进入半开状态</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">半开就是尝试请求一下</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">没问题就关闭这个熔断</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">feign fallback和fallbackFactory两者使用推荐</span></span>
<span class="line"><span style="color:#A6ACCD;">建议使用fallbackFactory</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 如果使用了fallback也可以继续使用</span></span>
<span class="line"><span style="color:#A6ACCD;">原因</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;">fallbackFactory功能更强大</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 可以将上游的异常传递到回退类中</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 如果回退中需要抛出上游异常</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">或者打印异常都可以</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> 拓展性更强一些</span></span>
<span class="line"><span style="color:#A6ACCD;">当factory每次都返回一个相同的对象</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">那么factory就约等于fallback</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">配置文件中增加上报控制台的地址</span></span>
<span class="line"><span style="color:#A6ACCD;">spring</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sentinel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">transport</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dashboard </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">dashboard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">默认与控制台进行交互的端口号是8719 </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> 如果有端口冲突</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">可以修改端口号</span></span>
<span class="line"><span style="color:#A6ACCD;">spring</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sentinel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">transport</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">port</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">port</span><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="熔断" tabindex="-1">熔断 <a class="header-anchor" href="#熔断" aria-label="Permalink to &quot;熔断&quot;">​</a></h3><p>当失败率(如因网络故障/超时造成的失败率高)达到阀值自动触发降级，熔断器触发的快速失败会进行快速恢复（达到一定失败率指定时间内直接返回托底数据）</p><p>resource为资源 grade为类型, 1代表qps, 0代表线程数, 建议用1 count为阈值 resource为资源 grade为类型, 1代表1秒异常率, 0为1秒慢请求数, 2为60s异常数 ; 异常率更为通用,没有特殊使用建议用1, count: 当grade为1时, 0.5代表 50%异常率 timeWindow: 发生熔断后多久会进入半开状态(半开就是尝试请求一下,没问题就关闭这个熔断)</p><p><img src="`+F+'" alt="Alt text"></p><h3 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h3><p>路线 <a href="https://juejin.cn/post/7162121477934809125" target="_blank" rel="noreferrer">https://juejin.cn/post/7162121477934809125</a></p><p>sentinel <a href="https://juejin.cn/post/6922713509021253639" target="_blank" rel="noreferrer">https://juejin.cn/post/6922713509021253639</a></p><h2 id="卡号设计" tabindex="-1">卡号设计 <a class="header-anchor" href="#卡号设计" aria-label="Permalink to &quot;卡号设计&quot;">​</a></h2><p><img src="'+C+`" alt="Alt text"></p><h2 id="幂等" tabindex="-1">幂等 <a class="header-anchor" href="#幂等" aria-label="Permalink to &quot;幂等&quot;">​</a></h2><p>1、插入删除场景 可以使用分布式唯一id 生成方式 <a href="https://xw.qq.com/cmsid/20220628A08K0S00" target="_blank" rel="noreferrer">https://xw.qq.com/cmsid/20220628A08K0S00</a> ① redis生成ID (redis的原子操作 INCR、INCRBY) ② 雪花算法 (强依赖机器时钟，如果机器时钟回拨，会导致重复或服务不可用) ③ 数据库号段模式 (比较主流，从数据库批量获取ID,即从数据获取(1,1000]号段，自增用完之后再去数据库获取) ④ Zookeeper生成ID (不太好) Zookeeper 的 znode 数据版本来生成序列号，可以生成 32 位和 64 位的数据版本号，客户端可以使用这个版本号来作为唯一的序列号。由于需要依赖 zookeeper，并且是多步调用 API，如果在竞争较大的情况下，可能需要考虑使用分布式锁，故此种生成唯一 ID 的方法的性能在高并发的分布式环境下不甚理想。</p><pre><code>⑤ 美团 Leaf-segment 方案 (号段的升级)
⑥ 滴滴 Tingid 方案 (Leaf-segment的升级)
</code></pre><p>2、更新场景 数据库乐观锁</p><h2 id="订单超时未支付取消" tabindex="-1">订单超时未支付取消 <a class="header-anchor" href="#订单超时未支付取消" aria-label="Permalink to &quot;订单超时未支付取消&quot;">​</a></h2><p><a href="https://juejin.cn/post/7181297729979547705" target="_blank" rel="noreferrer">https://juejin.cn/post/7181297729979547705</a></p><h2 id="延时关单" tabindex="-1">延时关单 <a class="header-anchor" href="#延时关单" aria-label="Permalink to &quot;延时关单&quot;">​</a></h2><h3 id="kafka时间轮" tabindex="-1">kafka时间轮 <a class="header-anchor" href="#kafka时间轮" aria-label="Permalink to &quot;kafka时间轮&quot;">​</a></h3><h3 id="rocketmq延迟消息" tabindex="-1">rocketMQ延迟消息 <a class="header-anchor" href="#rocketmq延迟消息" aria-label="Permalink to &quot;rocketMQ延迟消息&quot;">​</a></h3><h3 id="rabbitmq死信队列" tabindex="-1">rabbitMQ死信队列 <a class="header-anchor" href="#rabbitmq死信队列" aria-label="Permalink to &quot;rabbitMQ死信队列&quot;">​</a></h3><p>会存在消息阻塞问题</p><h3 id="rabbitmq-delayed-message-exchange插件" tabindex="-1">rabbitmq_delayed_message_exchange插件 <a class="header-anchor" href="#rabbitmq-delayed-message-exchange插件" aria-label="Permalink to &quot;rabbitmq_delayed_message_exchange插件&quot;">​</a></h3><p>解决了消息阻塞问题</p><h3 id="redis-zset" tabindex="-1">redis zset <a class="header-anchor" href="#redis-zset" aria-label="Permalink to &quot;redis zset&quot;">​</a></h3><p>等等</p><p><a href="https://mp.weixin.qq.com/s/kYr0woa_BZbiFansqyhhhA" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/kYr0woa_BZbiFansqyhhhA</a></p><p>b站弹幕人脸遮挡 <a href="https://juejin.cn/post/7157955440549036069" target="_blank" rel="noreferrer">https://juejin.cn/post/7157955440549036069</a></p><h2 id="附近门店" tabindex="-1">附近门店 <a class="header-anchor" href="#附近门店" aria-label="Permalink to &quot;附近门店&quot;">​</a></h2><p>描述：附近门店、附近的人都类似</p><h2 id="_1、geohash算法" tabindex="-1">1、Geohash算法 <a class="header-anchor" href="#_1、geohash算法" aria-label="Permalink to &quot;1、Geohash算法&quot;">​</a></h2><p><img src="`+h+`" alt="image-20220516222354229"></p><p>2、redis geo结构 专门用来存储地理位置</p><p>3、基础逻辑 根据用户位置信息等，用es搜索符合条件的门店code 根据code去redis查门店详细信息，缓存没有就去数据库查询并缓存</p><p>4、首页高并发处理 双层缓存 先从caffeine查询数据，不存在就去redis查，也不存在去数据库查，并且同步到缓存 geohash附近门店列表 经纬度转成geohash字符串，就可以根据前缀匹配门店 <a href="https://juejin.cn/post/6844903491220013069#heading-18" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903491220013069#heading-18</a><a href="https://github.com/kungfoo/geohash-java" target="_blank" rel="noreferrer">https://github.com/kungfoo/geohash-java</a></p><p>一层、进程缓存caffeine 优点 没有网络开销，节省内外带宽，响应延迟低 提供线程安全的缓存操作 提供过期策略、回收策略、缓存监控 缺点 单节点，如何保证进程内缓存的数据一致性（使用mq广播机制，通知所有服务同步清除） 使用不合理容易导致内存泄露</p><p>二层、redis 使用redis消息监听器容器，门店信息修改时，触发进程内缓存实时修改，保存数据一致性 缺点 缓存服务数据吞吐量大、带宽跑满 门店信息数据较大，读取性能不高</p><p>服务器受理能力 大概 数据库 tps 1000 qps 3000 web服务器 关键接口tps 6000 mysql单机受理能力 单个mysql tps参考7000 峰值的7倍</p><p>SELECT ACOS(SIN(( PI() / 180 ) * 纬度 ) * SIN(( PI() / 180 ) * 目标纬度 ) + COS(( PI() / 180 ) * 纬度 ) * COS(( PI() / 180 ) * 目标纬度 ) * COS(( PI() / 180 ) * 目标经度 - ( PI() / 180 ) * 经度 )) * 6371 AS distance;</p><p>一、文件上传下载 <a href="https://sf.163.com/help/documents/105052080335671296" target="_blank" rel="noreferrer">https://sf.163.com/help/documents/105052080335671296</a></p><p>二、设计模式 <a href="https://refactoringguru.cn/" target="_blank" rel="noreferrer">https://refactoringguru.cn/</a></p><p>三、外网 product hunt 和 indie hackers</p><h2 id="大数据量用户名不重复设计" tabindex="-1">大数据量用户名不重复设计 <a class="header-anchor" href="#大数据量用户名不重复设计" aria-label="Permalink to &quot;大数据量用户名不重复设计&quot;">​</a></h2><p>redis缓存所有用户名 布隆过滤器 不方便修改，修改用户名原来的用户名也不能删除，否则会影响hash值 红黑树 HyperLogLog 比较适合使用在一些应用级别，接口级别的非精确唯一性统计上，比如统计当前某个页面的 uv, 某个接口的请求 uv （访问量）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">PFADD: 添加一个或者多个元素。PFADD key1 v1 v2 v3.O(1).</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> PFCOUNT: 返回不重复的元素的个数，可以统计多个 key. 同时，返回值是有一定 (0.81%) 错误率的近似值。PFCOUNT key1 key2 key3.O(n).</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> PFMERGE: 将多个 key 的内容合并到一个 key 中。PFMERGE target key1 key2.O(n),n 是 key 的数量。</span></span></code></pre></div><p>在日常的工作中，大部分情况下我们是走离线大数据那一套东西，将数据通过 kafka 等发送，之后导入 hive, 从 hive 中用 distinct来查找。</p><h2 id="三高-高并发、高性能、高可用" tabindex="-1">三高(高并发、高性能、高可用) <a class="header-anchor" href="#三高-高并发、高性能、高可用" aria-label="Permalink to &quot;三高(高并发、高性能、高可用)&quot;">​</a></h2>`,106),b=[u];function g(m,q,f,k,P,M){return a(),n("div",null,b)}const Q=s(d,[["render",g]]);export{x as __pageData,Q as default};
