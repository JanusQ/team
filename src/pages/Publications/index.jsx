import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import HeaderImage from '@/components/HeaderImage'
import '@/assets/styles/common.scss'
import { useLangStore } from '@/store/lang'
import paper1 from '@/assets/image/about/paper1.png'
import paper2 from '@/assets/image/about/paper2.png'
import paper3 from '@/assets/image/about/paper3.png'
import paper4 from '@/assets/image/about/paper4.png'
import { Row, Col } from 'antd'
import Title from '@/components/Title'
export default function Publications() {
  const { lang } = useLangStore()

  // PublicationsList
  const PublicationsListZh = [
    {
      paperimape: paper1,
      title: 'QuFEM:基于有限元方法的快速而准确的量子读取校准',
      place: 'ASPLOS 2024',
      author: [
        '谭思危',
        '张涵禹',
        '余加',
        '郎聪亮',
        '赵新奎',
        '陈明帅',
        '梁云',
        '卢丽强',
        '尹建伟',
      ],
      Abstract:
        'Quantum readout error turns out to be the most significant error source, which greatly affects the measurement fidelity. Matrix-based calibration has been demonstrated to be effective in various quantum platforms. However, existing methodologies are fundamentally limited in either scalability or accuracy. Inspired by the classical finite element method (FEM), a formal method to model the complex interaction be- tween elements, we present our calibration framework named QuFEM. First, we formulate the calibration as a series of tensor-product with noise matrices. The matrix is iteratively characterized together with the calibrated probability distribution, aiming to capture the inherent locality of qubit inter- actions. Then, to accelerate the end-to-end calibration, we propose a sparse tensor-product engine to exploit the sparsity in the intermediate data. Our experiments show that QuFEM achieves 1.8 × 109 × speedup in the 136-qubit calibration com- pared to the state-of-the-art matrix-based calibration technique [47], and provides 1.2× and 1.4× fidelity improvement on the 18-qubit and 36-qubit real-world quantum devices. The source code and dataset of QuFEM will be publicly available on',
      link: 'https://link-omitted-for-blind-review',
      content:
        '在当前的嘈杂中尺度量子 (NISQ) 时代，“量子读取错误”被证明是最显著的错误源，对测量保真度产生了极大的影响。矩阵基准校准已经在各种量子平台上证明其有效性。然而，现有的方法在可扩展性或准确性方面存在根本性的限制。针对上述问题，由经典有限元方法（FEM）的启发，我们提出了一种快速而准确的校准框架，名为 QuFEM。本文主要贡献有：（1）提出了 QuFEM校准框架，受到经典 FEM 中涉及的系统演化的启发。我们的重新定义具有迭代过程，这提供了对表征和校准的更深入的理解。（2） 提出了一种生成基准电路的新方法。我们的生成技术极大地减少了表征的时间复杂性，从指数级（O(2^n)）降低到多项式级（O(n^2)）。（3）提出了一种稀疏计算引擎来加速端到端的校准,校准时间仅与比特数的立方成正比 ,与最先进的方法相比，在 136 量子比特的校准中实现了 1.8 × 109 倍的加速，并在 7 比特和 18 比特的真实量子设备上提供了 1.2倍和 1.4倍的保真度改进。',
    },
    {
      paperimape: paper2,
      title: 'HyQSAT:基于量子退火和CDCLSAT问题混合求解方法',
      place: 'HPCA 2023',
      author: [
        '谭思危',
        '于茗谦',
        'Andre Python',
        '尚永衡',
        '李婷婷',
        '卢丽强',
        '尹建伟',
      ],
      Abstract:
        'Propositional satisfiability problem (SAT) is represented in a conjunctive normal form with multiple clauses, which is an important non-deterministic polynomial-time (NP) complete problem that plays a major role in various applications including artificial intelligence, graph colouring, and circuit analysis. Quantum annealing (QA) is a promising methodology for solving complex SAT problems by exploiting the parallelism of quantum entanglement, where the SAT variables are embedded to the qubits. However, the long embedding time fundamentally limits existing QA-based methods, leading to inefficient hardware implementation and poor scalability.  In this paper, we propose HyQSAT, a hybrid approach that integrates QA with the classical Conflict-Driven Clause Learning (CDCL) algorithm to enable end-to-end acceleration for solving SAT problems. Instead of embedding all clauses to QA hardware, we quantitatively estimate the conflict frequency of clauses and apply breadth-first traversal to choose their embedding order. We also consider the hardware topology to maximize the utilization of physical qubits in embedding to QA hardware. Besides, we adjust the embedding coefficients to improve the computation accuracy under qubit noise. Finally, we present how to interpret the satisfaction probability based on QA energy distribution and use this information to guide the CDCL search. Our experiments demonstrate that HyQSAT can effectively support larger-scale SAT problems that are beyond the capability of existing QA approaches, achieve up to 12.62X end-to-end speedup using D- Wave 2000Q compared to the classic CDCL algorithm on Intel E5 CPU, and considerably reduce the QA embedding time from 17.2s to 15.7μs compared to the D-Wave Minorminer algorithm [11]. ',
      link: 'https://ieeexplore.ieee.org/document/10071022',
      content:
        'SAT问题作为一个典型NP困难问题，穷举搜索非常耗时，需要指数时间复杂度。但是可以通过数学的方法将SAT问题转化为二值优化问题。而一类特殊的量子计算机——量子退火器最擅长求解二值优化问题。编码之后，求解SAT问题就转化成了量子退火算法中求解系统能级最低点的问题，使用量子退火器进行求解，就可以有效利用量子优势实现指数级别的加速。研究团队提出的方法采用混合经典算法与量子退火算法的方式。具有编码时间短、可解决大规模SAT问题的特点。在部署量子硬件时，研究团队还考虑了量子比特的拓扑信息，显著降低了映射的时间复杂度，提高了量子退火器上量子比特的利用率。最终，研究团队在11类相关数据集上进行了实验（来自于密码学、人工智能应用、图着色、电路分析等领域），与经典算法相比，团队提出的方法平均实现了12.19倍的加速，表现最好的可以实现83.21倍的加速。量子计算作当前科技发展的战略核心，团队师生不断砥砺前行，致力于深耕尖端领域，抓住量子信息技术的发展机遇，担负起科技强国的时代使命。',
    },
    {
      paperimape: paper3,
      title: '使用可复用的波形库加速量子波形编译',
      place: 'ICCAD 2023',
      author: ['田吴炜', '贾星辉', '谭思危', '宋紫璇', '卢丽强', '尹建伟'],
      Abstract:
        'Quantum circuit serves as a popular programming model that describes the computation using a set of quantum gates, which requires generating a sequence of pulses that collect the operation of each gate for superconducting quantum devices. However, existing quantum synthesis frameworks, like IBM OpenPulse [1], involve massive redundant computation during pulse generation, suffering from a high computational cost when handling large-scale circuits. In this paper, we propose QPulseLib, a novel library with reusable pulses that can directly provide the pulse of a circuit block. To establish this library, we transform the circuit and apply convolutional operators to extract reusable patterns and pre-calculate their resultant pulses. Then, we develop a matching algorithm to identify such patterns shared by the target circuit. Experiments show that QPulseLib achieves 158.46× and 16.03× speedup for pulse generation, compared to OpenPulse and AccQOC [2].',
      link: 'https://ieeexplore.ieee.org/document/10323711',
      content:
        '量子电路是一组量子门计算的集合。为了实现超导量子硬件控制，需要根据量子电路来生成对应的量子测控波形。然而，现有的量子合成框架，如IBM OpenPulse，在脉冲生成过程中会涉及大量冗余计算，在处理大规模电路时计算成本很高。在本文中，我们提出了QPulseLib，这是一个包含可重复使用波形的预生成波形库。为了建立该库，我们先对电路进行变换，并应用卷积算子来提取量子电路中重复出现的子电路，并预先计算其产生的脉冲。然后，我们开发了一种匹配算法来识别目标电路中的已有的频繁子电路，并添加相应的波形数据。实验表明，与OpenPulse和先进的波形生成方法AccQOC相比，QPulseLib的脉冲生成速度分别提高了158.46倍和16.03倍。',
    },
    {
      paperimape: paper4,
      title: '基于上下文和特征提取的量子电路分析框架',
      place: 'MICRO 2023',
      Abstract:
        'In the current Noisy Intermediate-Scale Quantum era, quantum circuit analysis is an essential technique for designing high-performance quantum programs. Current analysis methods exhibit either accuracy limitations or high computational complexity for obtaining precise results. To reduce this tradeoff, we propose QuCT, a unified framework for extracting, analyzing, and optimizing quantum circuits. The main innovation of QuCT is to vectorize each gate with each element, quantitatively describing the degree of the interaction with neighboring gates. Extending from the vectorization model, we propose two representative downstream models for fidelity prediction and unitary decomposition. The fidelity prediction model performs a linear transformation on all gate vectors and aggregates the results to estimate the overall circuit fidelity. By identifying critical weights in the transformation matrix, we propose two optimizations to improve the circuit fidelity. In the unitary decomposition model, we significantly reduce the search space by bridging the gap between unitary and circuit via gate vectors. Experiments show that QuCT improves the accuracy of fidelity prediction by 4.2× on 5-qubit and 18-qubit quantum devices and achieves 2.5× fidelity improvement compared to existing quantum compilers [19, 55]. In unitary decomposition, QuCT achieves 46.3× speedup for 5-qubit unitary and more than hundreds of speedup for 8-qubit unitary, compared to the state-of-the-art method [87].',
      link: 'https://dl.acm.org/doi/10.1145/3613424.3614274',
      author: [
        '谭思危',
        '郎聪亮',
        ' Liang Xiang',
        '王沭迪',
        '贾星辉',
        ' Ziqi Tan',
        '李婷婷',
        'Jieming Yin',
        '尚永衡',
        'Andre Python',
        '卢丽强',
        '尹建伟',
      ],
      content:
        '在当前的嘈杂中尺度量子（NISQ）时代，量子电路分析是设计高性能量子程序的一项重要技术。当前分析方法仍依赖经典计算机，因而面临在准确性和计算复杂度之间的平衡。针对上述问题，本文提出了基于上下文和特征提取的量子电路分析框架QuCT，用于提取、分析和优化量子电路。本文主要贡献有：（1）将分析任务解耦为上游矢量化模型和下游模型，以较低的计算成本提供准确的分析结果。（2）从上游模型延伸，提出了一种精确的保真度预测模型，该模型自然支持分析由门交互引起的错误，并提供优化技术来减轻这些错误。（3）提出了一种酉矩阵分解模型，可以通过捕获不同酉矩阵之间的电路相似性来有效地减少搜索空间。实验表明，与现有量子编译器相比，QuCT在5bit和18bit量子设备上保真度预测精度分别提高了4.2倍和9.1倍。在酉分解中，与最先进的方法相比，QuCT在5bit酉分解中实现了46.3倍的加速，在8量子位酉分解中实现了数百倍以上的加速。',
    },
  ]
  const PublicationsListEn = [
    {
      paperimape: paper1,
      title:
        'QuFEM: Fast and Accurate Quantum Readout Calibration Using the Finite Element Method',
      place: 'ASPLOS 2024',
      author: [
        'Siwei Tan',
        'Hanyu Zhang',
        'Jia Yu',
        ' Congliang Lang',
        ' Xinkui Zhao',
        'Mingshuai Chen',
        'Yun Liang',
        ' Liqiang Lu',
        'Jianwei Yin',
      ],
      Abstract:
        'Quantum readout error turns out to be the most significant error source, which greatly affects the measurement fidelity. Matrix-based calibration has been demonstrated to be effective in various quantum platforms. However, existing methodologies are fundamentally limited in either scalability or accuracy. Inspired by the classical finite element method (FEM), a formal method to model the complex interaction be- tween elements, we present our calibration framework named QuFEM. First, we formulate the calibration as a series of tensor-product with noise matrices. The matrix is iteratively characterized together with the calibrated probability distribution, aiming to capture the inherent locality of qubit inter- actions. Then, to accelerate the end-to-end calibration, we propose a sparse tensor-product engine to exploit the sparsity in the intermediate data. Our experiments show that QuFEM achieves 1.8 × 109 × speedup in the 136-qubit calibration com- pared to the state-of-the-art matrix-based calibration technique [47], and provides 1.2× and 1.4× fidelity improvement on the 18-qubit and 36-qubit real-world quantum devices. The source code and dataset of QuFEM will be publicly available on',
      link: 'https://link-omitted-for-blind-review',
      content:
        '在当前的嘈杂中尺度量子 (NISQ) 时代，“量子读取错误”被证明是最显著的错误源，对测量保真度产生了极大的影响。矩阵基准校准已经在各种量子平台上证明其有效性。然而，现有的方法在可扩展性或准确性方面存在根本性的限制。针对上述问题，由经典有限元方法（FEM）的启发，我们提出了一种快速而准确的校准框架，名为 QuFEM。本文主要贡献有：（1）提出了 QuFEM校准框架，受到经典 FEM 中涉及的系统演化的启发。我们的重新定义具有迭代过程，这提供了对表征和校准的更深入的理解。（2） 提出了一种生成基准电路的新方法。我们的生成技术极大地减少了表征的时间复杂性，从指数级（O(2^n)）降低到多项式级（O(n^2)）。（3）提出了一种稀疏计算引擎来加速端到端的校准,校准时间仅与比特数的立方成正比 ,与最先进的方法相比，在 136 量子比特的校准中实现了 1.8 × 109 倍的加速，并在 7 比特和 18 比特的真实量子设备上提供了 1.2倍和 1.4倍的保真度改进。',
    },
    {
      paperimape: paper2,
      title:
        'HyQSAT: A Hybrid Approach for 3-SAT Problems by Integrating Quantum Annealer with CDCL',
      place: 'HPCA 2023',
      author: [
        'Siwei Tan',
        'Mingqian Yu',
        'Andre Python',
        'Yongheng Shang',
        ' Tingting Li',
        'Liqiang Lu',
        'Jianwei Yin',
      ],
      Abstract:
        'Propositional satisfiability problem (SAT) is represented in a conjunctive normal form with multiple clauses, which is an important non-deterministic polynomial-time (NP) complete problem that plays a major role in various applications including artificial intelligence, graph colouring, and circuit analysis. Quantum annealing (QA) is a promising methodology for solving complex SAT problems by exploiting the parallelism of quantum entanglement, where the SAT variables are embedded to the qubits. However, the long embedding time fundamentally limits existing QA-based methods, leading to inefficient hardware implementation and poor scalability.  In this paper, we propose HyQSAT, a hybrid approach that integrates QA with the classical Conflict-Driven Clause Learning (CDCL) algorithm to enable end-to-end acceleration for solving SAT problems. Instead of embedding all clauses to QA hardware, we quantitatively estimate the conflict frequency of clauses and apply breadth-first traversal to choose their embedding order. We also consider the hardware topology to maximize the utilization of physical qubits in embedding to QA hardware. Besides, we adjust the embedding coefficients to improve the computation accuracy under qubit noise. Finally, we present how to interpret the satisfaction probability based on QA energy distribution and use this information to guide the CDCL search. Our experiments demonstrate that HyQSAT can effectively support larger-scale SAT problems that are beyond the capability of existing QA approaches, achieve up to 12.62X end-to-end speedup using D- Wave 2000Q compared to the classic CDCL algorithm on Intel E5 CPU, and considerably reduce the QA embedding time from 17.2s to 15.7μs compared to the D-Wave Minorminer algorithm [11]. ',
      link: 'https://ieeexplore.ieee.org/document/10071022',
      content:
        'SAT问题作为一个典型NP困难问题，穷举搜索非常耗时，需要指数时间复杂度。但是可以通过数学的方法将SAT问题转化为二值优化问题。而一类特殊的量子计算机——量子退火器最擅长求解二值优化问题。编码之后，求解SAT问题就转化成了量子退火算法中求解系统能级最低点的问题，使用量子退火器进行求解，就可以有效利用量子优势实现指数级别的加速。研究团队提出的方法采用混合经典算法与量子退火算法的方式。具有编码时间短、可解决大规模SAT问题的特点。在部署量子硬件时，研究团队还考虑了量子比特的拓扑信息，显著降低了映射的时间复杂度，提高了量子退火器上量子比特的利用率。最终，研究团队在11类相关数据集上进行了实验（来自于密码学、人工智能应用、图着色、电路分析等领域），与经典算法相比，团队提出的方法平均实现了12.19倍的加速，表现最好的可以实现83.21倍的加速。量子计算作当前科技发展的战略核心，团队师生不断砥砺前行，致力于深耕尖端领域，抓住量子信息技术的发展机遇，担负起科技强国的时代使命。',
    },
    {
      paperimape: paper3,
      title:
        'QPulseLib: Accelerating the Pulse Generation of Quantum Circuit with Reusable Patterns',
      place: 'ICCAD 2023',
      author: [
        'Wuwei Tian',
        'Xinghui Jia',
        'Siwei Tan',
        'Zixuan Song',
        'Liqiang Lu',
        'Jianwei Yin',
      ],
      Abstract:
        'Quantum circuit serves as a popular programming model that describes the computation using a set of quantum gates, which requires generating a sequence of pulses that collect the operation of each gate for superconducting quantum devices. However, existing quantum synthesis frameworks, like IBM OpenPulse [1], involve massive redundant computation during pulse generation, suffering from a high computational cost when handling large-scale circuits. In this paper, we propose QPulseLib, a novel library with reusable pulses that can directly provide the pulse of a circuit block. To establish this library, we transform the circuit and apply convolutional operators to extract reusable patterns and pre-calculate their resultant pulses. Then, we develop a matching algorithm to identify such patterns shared by the target circuit. Experiments show that QPulseLib achieves 158.46× and 16.03× speedup for pulse generation, compared to OpenPulse and AccQOC [2].',
      link: 'https://ieeexplore.ieee.org/document/10323711',
      content:
        '量子电路是一组量子门计算的集合。为了实现超导量子硬件控制，需要根据量子电路来生成对应的量子测控波形。然而，现有的量子合成框架，如IBM OpenPulse，在脉冲生成过程中会涉及大量冗余计算，在处理大规模电路时计算成本很高。在本文中，我们提出了QPulseLib，这是一个包含可重复使用波形的预生成波形库。为了建立该库，我们先对电路进行变换，并应用卷积算子来提取量子电路中重复出现的子电路，并预先计算其产生的脉冲。然后，我们开发了一种匹配算法来识别目标电路中的已有的频繁子电路，并添加相应的波形数据。实验表明，与OpenPulse和先进的波形生成方法AccQOC相比，QPulseLib的脉冲生成速度分别提高了158.46倍和16.03倍。',
    },
    {
      paperimape: paper4,
      title:
        'QuCT: A Framework for Analyzing Quantum Circuit by Extracting Contextual and Topological Features',
      place: 'MICRO 2023',
      Abstract:
        'In the current Noisy Intermediate-Scale Quantum era, quantum circuit analysis is an essential technique for designing high-performance quantum programs. Current analysis methods exhibit either accuracy limitations or high computational complexity for obtaining precise results. To reduce this tradeoff, we propose QuCT, a unified framework for extracting, analyzing, and optimizing quantum circuits. The main innovation of QuCT is to vectorize each gate with each element, quantitatively describing the degree of the interaction with neighboring gates. Extending from the vectorization model, we propose two representative downstream models for fidelity prediction and unitary decomposition. The fidelity prediction model performs a linear transformation on all gate vectors and aggregates the results to estimate the overall circuit fidelity. By identifying critical weights in the transformation matrix, we propose two optimizations to improve the circuit fidelity. In the unitary decomposition model, we significantly reduce the search space by bridging the gap between unitary and circuit via gate vectors. Experiments show that QuCT improves the accuracy of fidelity prediction by 4.2× on 5-qubit and 18-qubit quantum devices and achieves 2.5× fidelity improvement compared to existing quantum compilers [19, 55]. In unitary decomposition, QuCT achieves 46.3× speedup for 5-qubit unitary and more than hundreds of speedup for 8-qubit unitary, compared to the state-of-the-art method [87].',
      link: 'https://dl.acm.org/doi/10.1145/3613424.3614274',
      author: [
        'Siwei Tan',
        ' Congliang Lang',
        ' Liang Xiang',
        'Shudi Wang',
        'Xinghui Jia',
        ' Ziqi Tan',
        'Tingting Li',
        'Jieming Yin',
        'Yongheng Shang',
        'Andre Python',
        ' Liqiang Lu',
        'Jianwei Yin',
      ],
      content:
        '在当前的嘈杂中尺度量子（NISQ）时代，量子电路分析是设计高性能量子程序的一项重要技术。当前分析方法仍依赖经典计算机，因而面临在准确性和计算复杂度之间的平衡。针对上述问题，本文提出了基于上下文和特征提取的量子电路分析框架QuCT，用于提取、分析和优化量子电路。本文主要贡献有：（1）将分析任务解耦为上游矢量化模型和下游模型，以较低的计算成本提供准确的分析结果。（2）从上游模型延伸，提出了一种精确的保真度预测模型，该模型自然支持分析由门交互引起的错误，并提供优化技术来减轻这些错误。（3）提出了一种酉矩阵分解模型，可以通过捕获不同酉矩阵之间的电路相似性来有效地减少搜索空间。实验表明，与现有量子编译器相比，QuCT在5bit和18bit量子设备上保真度预测精度分别提高了4.2倍和9.1倍。在酉分解中，与最先进的方法相比，QuCT在5bit酉分解中实现了46.3倍的加速，在8量子位酉分解中实现了数百倍以上的加速。',
    },
    {
      title:
        'Calabash: Accelerating Attention using a Systolic Array Chain on FPGAs',
      author: [
        'Zizhang Luo',
        'Liqiang Lu',
        'Yichen Jin',
        'Liancheng Jia',
        'Yun Liang',
      ],
      place: 'FPL 2023',
      Abstract:
        'In recent years, attention mechanism has achieved remarkable performance in natural language processing and computer vision applications, at the expense of high computation cost. FPGAs have been demonstrated to be an effective hardware platform for various AI applications. However, the attention mechanism involves complex data dependency, which makes FPGA acceleration difficult. In this paper, we propose Calabash, an FPGA accelerator for attention-based applications. We design a chain of two systolic arrays, applying the same dataflow. Then, we design two scheduling techniques for different matrices to ensure the intermediate matrix can be cached in the on-chip memory. Finally, we develop analytical models for resource utilization estimation, workload balancing, and latency prediction to guide design space exploration. Experiments show that Calabash achieves 1.76 TOP/s, 1.06 TOP/s on Xilinx VU9P and ZCU102 platforms, yielding an average 50.1X and 3.94X energy-efficiency improvement compared with CPU and GPU, respectively.',
      link: 'https://ieeexplore.ieee.org/document/10296242',
    },
    {
      title:
        'Rubick: A Synthesis Framework for Spatial Architectures via Dataflow Decomposition',
      author: [
        'Zizhang Luo',
        'Liqiang Lu',
        'Size Zheng',
        'Jieming Yin',
        'Jason Cong',
        'Jianwei Yin',
        'Yun Liang',
      ],
      place: 'DAC 2023',
      Abstract:
        'Dataflows are critical for spatial architectures designed for tensor applications. Prior works develop various notations and hardware generation frameworks for dataflows. However, due to the semantic gap between notations and low-level details, analysis based on these notations cannot capture the detailed architectural features between different dataflows, so these works failed to provide architectural optimization and efficient design space exploration (DSE) at the same time.We propose Rubick, a synthesis framework for spatial architecture. Rubick decomposes the dataflow into two low-level intermediate representations including access entry and data layout. Access entry specifies how data enter into the PE arrays from memory, while data layout specifies how data are arranged and accessed. Based on this decomposition, Rubick provides efficient DSE and generates optimized hardware. Experiments show that the DSE time is accelerated by up to 1.1×10 5 X and performance on FPGA is improved by 13%.',
      link: 'https://ieeexplore.ieee.org/document/10247743',
    },
    {
      title:
        'AMOS: Enabling Automatic Mapping for Tensor Computations on Spatial Accelerators with Hardware Abstraction',
      author: [
        'Size Zheng',
        'Renze Chen',
        'Anjiang Wei',
        'Yicheng Jin',
        'Qin Han',
        'Liqiang Lu',
        'Bingyang Wu',
        'Xiuhong Li',
        'Shengen Yan',
        'Yun Liang',
      ],
      place: 'ISCA 2022',
      Abstract: `Hardware specialization is a promising trend to sustain performance growth. Spatial hardware accelerators that employ specialized and hierarchical computation and memory resources have recently shown high performance gains for tensor applications such as deep learning, scientific computing, and data mining. To harness the power of these hardware accelerators, programmers have to use specialized instructions with certain hardware constraints. However, these hardware accelerators and instructions are quite new and there is a lack of understanding of the hardware abstraction, performance optimization space, and automatic methodologies to explore the space. Existing compilers use hand-tuned computation implementations and optimization templates, resulting in sub-optimal performance and heavy development costs.

      In this paper, we propose AMOS, which is an automatic compilation framework for spatial hardware accelerators. Central to this framework is the hardware abstraction that not only clearly specifies the behavior of spatial hardware instructions, but also formally defines the mapping problem from software to hardware. Based on the abstraction, we develop algorithms and performance models to explore various mappings automatically. Finally, we build a compilation framework that uses the hardware abstraction as compiler intermediate representation (IR), explores both compute mappings and memory mappings, and generates high-performance code for different hardware backends. Our experiments show that AMOS achieves more than 2.50× speedup to hand-optimized libraries on Tensor Core, 1.37× speedup to TVM on vector units of Intel CPU for AVX-512, and up to 25.04× speedup to AutoTVM on dot units of Mali GPU. The source code of AMOS is publicly available.`,
      link: 'https://dl.acm.org/doi/10.1145/3470496.3527440',
    },
    {
      title:
        'TENET: A Framework for Modeling Tensor Dataflow Based on Relation-centric Notation',
      author: ['Liqiang Lu', 'Naiqing Guan', 'Jason Cong', 'Yun Liang'],
      place: 'ISCA 2021',
      Abstract: `Accelerating tensor applications on spatial architectures provides high performance and energy-efficiency, but requires accurate performance models for evaluating various dataflow alternatives. Such modeling relies on the notation of tensor dataflow and the formulation of performance metrics. Recent proposed compute-centric and data-centric notations describe the dataflow using imperative directives. However, these two notations are less expressive and thus lead to limited optimization opportunities and inaccurate performance models.

      In this paper, we propose a framework TENET that models hardware dataflow of tensor applications. We start by introducing a relation-centric notation, which formally describes the hardware dataflow for tensor computation. The relation-centric notation specifies the hardware dataflow, PE interconnection, and data assignment in a uniform manner using relations. The relation-centric notation is more expressive than the compute-centric and data-centric notations by using more sophisticated affine transformations. Another advantage of relation-centric notation is that it inherently supports accurate metrics estimation, including data reuse, bandwidth, latency, and energy. TENET computes each performance metric by counting the relations using integer set structures and operators. Overall, TENET achieves 37.4% and 51.4% latency reduction for CONV and GEMM kernels compared with the state-of-the-art data-centric notation by identifying more sophisticated hardware dataflows.`,
      link: 'https://dl.acm.org/doi/10.1109/ISCA52012.2021.00062',
    },
    {
      title:
        'Sanger: A Co-Design Framework for Enabling Sparse Attention using Reconfigurable Architecture',
      author: ['Liqiang Lu', 'Yicheng Jin', 'Yun Liang'],
      place: 'MICRO 2021',
      Abstract: `In recent years, attention-based models have achieved impressive performance in natural language processing and computer vision applications by effectively capturing contextual knowledge from the entire sequence. However, the attention mechanism inherently contains a large number of redundant connections, imposing a heavy computational burden on model deployment. To this end, sparse attention has emerged as an attractive approach to reduce the computation and memory footprint, which involves the sampled dense-dense matrix multiplication (SDDMM) and sparse-dense matrix multiplication (SpMM) at the same time, thus requiring the hardware to eliminate zero-valued operations effectively. Existing techniques based on irregular sparse patterns or regular but coarse-grained patterns lead to low hardware efficiency or less computation saving.

      This paper proposes Sanger, a framework that harvests sparsity in the attention mechanism through synergistic hardware and software co-design. The software part prunes the attention matrix into a dynamic structured pattern, and the hardware part features a reconfigurable architecture that exploits such patterns. Specifically, we dynamically sparsify vanilla attention based on a quantized prediction of the attention matrix. Then, the sparse mask is re-arranged into structured blocks that are more amenable to hardware implementation. The hardware design of Sanger features a score-stationary dataflow that keeps sparse scores stationary in the PE to avoid decoding overhead. Using this dataflow and a reconfigurable systolic array design, we can unify the computation of SDDMM and SpMM operations. Typically, the PEs can be configured during runtime to support different data access and partial sum accumulation schemes. Experiments on BERT show that Sanger can prune the model to 0.08 - 0.27 sparsity without accuracy loss, achieving 4.64X, 22.7X, 2.39X, and 1.47X speedup compared to V100 GPU, AMD Ryzen Threadripper 3970X CPU, as well as the state-of-the-art attention accelerators A3 and SpAtten.`,
      link: 'https://dl.acm.org/doi/10.1145/3466752.3480125',
    },
    {
      title:
        'TensorLib: A Spatial Accelerator Generation Framework for Tensor Algebra',
      author: ['Liancheng Jia', 'Zizhang Luo', 'Liqiang Lu', 'Yun Liang'],
      place: 'DAC 2021',
      Abstract: `Tensor algebra finds applications in various domains, and these applications, especially when accelerated on spatial hardware accelerators, can deliver high performance and low power. Spatial hardware accelerator exhibits complex design space. Prior approaches based on manual implementation lead to low programming productivity, rendering thorough design space exploration impossible. In this paper, we propose TensorLib, a framework for generating spatial hardware accelerator for tensor algebra applications. TensorLib is motivated by the observation that, different dataflows share common hardware modules, which can be reused across different designs. To build such a framework, TensorLib first uses Space-Time Transformation to explore different dataflows, which can compactly represent the hardware dataflow using a simple transformation matrix. Next, we identify the common structures of different dataflows and build parameterized hardware module templates with Chisel. Our generation framework can select the needed hardware modules for each dataflow, connect the modules using a specified interconnection pattern, and automatically generate the complete hardware accelerator design. TensorLib remarkably improves the productivity for the development and optimization of spatial hardware architecture, providing a rich design space with tradeoffs in performance, area, and power. Experiments show that TensorLib can automatically generate hardware designs with different dataflows and achieve 21% performance improvement on FPGA compared to the state-of-the-arts.`,
      link: 'https://ieeexplore.ieee.org/document/9586329',
    },
    {
      title:
        'FCNNLib: an efficient and flexible convolution algorithm library on FPGAs',
      author: ['Qingcheng Xiao', 'Liqiang Lu', 'Jiaming Xie', 'Yun Liang'],
      place: 'DAC 2020',
      Abstract: `Convolutions can be implemented with different algorithms, which are diverse in arithmetic complexity, resource requirement, etc. Multiple algorithms can share the FPGA resources spatially as well as temporally, introducing either reconfiguration overhead or resource underutilization. In this paper, we propose an efficient library FCNNLib to coordinate multiple convolution algorithms on FPGAs. We develop three scheduling techniques: spatial, temporal, and hybrid, which exhibit different trade-offs in latency and throughput. We also expose a set of interfaces to arm the users. Experiments using modern CNNs demonstrate FCNNLib achieves up to 1.315X latency improvement compared with dedicated accelerators and 1.755X energy efficiency improvement compared with cuDNN.`,
      link: 'https://ieeexplore.ieee.org/document/9218748',
    },
    {
      title:
        'An Efficient Hardware Accelerator for Sparse Convolutional Neural Networks on FPGAs',
      author: ['Liqiang Lu', 'Jiansong Zhang', 'Wei Lin', 'Yun Liang'],
      place: 'FCCM 2019',
      Abstract: `Deep convolutional neural networks (CNN) have achieved remarkable performance with the cost of huge computation. As the CNN model becomes more complex and deeper, compressing CNN to sparse by pruning the redundant connection in networks has emerged as an attractive approach to reduce the amount of computation and memory requirement. In recent years, FPGAs have been demonstrated to be an effective hardware platform to accelerate CNN inference. However, most existing FPGA architectures focus on dense CNN models. The architecture designed for dense CNN models are inefficient when executing sparse models as most of the arithmetic operations involve addition and multiplication with zero operands. On the other hand, recent sparse FPGA accelerators only focus on FC layers. In this work, we aim to develop an FPGA accelerator for sparse CNNs. To efficiently deal with the irregular connection in the sparse convolutional layer, we propose a weight-oriented dataflow that processes each weight individually. Then we design an FPGA architecture which can handle input-weight connection and weight-output connection efficiently. For input-weight connection, we design a tile look-up table to eliminate the runtime indexing match of compressed weights. Moreover, we develop a weight layout to enable high on-chip memory access. To cooperate with the weight layout, a channel multiplexer is inserted to locate the address which can ensure no data access conflict. Experiments demonstrate that our accelerator can achieve 223.4-309.0 GOP/s for the modern CNNs on Xilinx ZCU102, which provides a 3.6x-12.9x speedup over previous dense CNN FPGA accelerators.`,
      link: 'https://ieeexplore.ieee.org/document/8735526',
    },
    {
      title:
        'An Efficient Sparse Winograd Convolutional Neural Networks Accelerator on FPGAs',
      author: ['Liqiang Lu', 'Yun Liang'],
      place: 'DAC 2018',
      Abstract: `FPGAs have been an efficient accelerator for CNN inference due to its high performance, flexibility, and energy-efficiency. To improve the performance of CNNs on FPGAs, fast algorithms and sparse methods emerge as the most attractive alternatives, which can effectively reduce the complexity of CNNs. Using fast algorithms, the feature maps are transformed to special domain to reduce the arithmetic complexity. On the other hand, compressing CNN models by pruning the unimportant connections reduces both storage and arithmetic complexity.In this paper, we introduce sparse Winograd convolution accelerator (SpWA) combining these two orthogonal approaches on FPGAs. First, we employ a novel dataflow by rearranging the filter layout in Winograd convolution. Then we design an efficient architecture to implement SpWA using line buffer design and Compress-Sparse-Column (CSC) format-based processing element. Finally, we propose an efficient algorithm based on dynamic programming to balance the computation among different processing elements. Experimental results on VGG16 and YOLO network show a 2.9x~3.1x speedup compared with state-of-the-art technique.`,
      link: 'https://ieeexplore.ieee.org/document/8465842',
    },
    {
      title:
        'Evaluating Fast Algorithms for Convolutional Neural Networks on FPGAs',
      author: ['Liqiang Lu', 'Yun Liang'],
      place: 'FCCM 2017',
      Abstract: `In recent years, convolutional neural networks (CNNs) have become widely adopted for computer vision tasks. Field-programmable gate arrays (FPGAs) have been adequately explored as a promising hardware accelerator for CNNs due to its high performance, energy efficiency, and reconfigurability. However, prior FPGA solutions based on the conventional convolutional algorithm is often bounded by the computational capability of FPGAs (e.g., the number of DSPs). To address this problem, the feature maps are transformed to a special domain using fast algorithms to reduce the arithmetic complexity. Winograd and fast Fourier transformation (FFT), as fast algorithm representatives, first transform input data and filter to Winograd or frequency domain, then perform element-wise multiplication, and apply inverse transformation to get the final output. In this paper, we propose a novel architecture for implementing fast algorithms on FPGAs. Our design employs line buffer structure to effectively reuse the feature map data among different tiles. We also effectively pipeline the Winograd/FFT processing element (PE) engine and initiate multiple PEs through parallelization. Meanwhile, there exists a complex design space to explore. We propose an analytical model to predict the resource usage and the performance. Then, we use the model to guide a fast design space exploration. Experiments using the state-of-the-art CNNs demonstrate the best performance and energy efficiency on FPGAs. We achieve 854.6 and 2479.6 GOP/s for AlexNet and VGG16 on Xilinx ZCU102 platform using Winograd. We achieve 130.4 GOP/s for Resnet using Winograd and 201.1 GOP/s for YOLO using FFT on Xilinx ZC706 platform.`,
      link: 'https://ieeexplore.ieee.org/abstract/document/8634913',
    },
    {
      title:
        'Exploring heterogeneous algorithms for accelerating deep convolutional neural networks on FPGAs',
      author: ['Qingcheng Xiao', 'Liqiang Lu', 'Yun Liang'],
      place: 'DAC 2017',
      Abstract: `Convolutional neural network (CNN) finds applications in a variety of computer vision applications ranging from object recognition and detection to scene understanding owing to its exceptional accuracy. There exist different algorithms for CNNs computation. In this paper, we explore conventional convolution algorithm with a faster algorithm using Winograd's minimal filtering theory for efficient FPGA implementation. Distinct from the conventional convolution algorithm, Winograd algorithm uses less computing resources but puts more pressure on the memory bandwidth. We first propose a fusion architecture that can fuse multiple layers naturally in CNNs, reusing the intermediate data. Based on this fusion architecture, we explore heterogeneous algorithms to maximize the throughput of a CNN. We design an optimal algorithm to determine the fusion and algorithm strategy for each layer. We also develop an automated toolchain to ease the mapping from Caffe model to FPGA bitstream using Vivado HLS. Experiments using widely used VGG and AlexNet demonstrate that our design achieves up to 1.99× performance speedup compared to the prior fusion-based FPGA accelerator for CNNs.`,
      link: 'https://ieeexplore.ieee.org/document/8060434',
    },
  ]
  const [PublicationsList, setPublicationsList] = useState(PublicationsListZh)

  // PatentsList
  const PatentsListZh = [
    {
      title: '一种针对量子退火器求解3-SAT问题的噪音优化方法',
      time: '2023年1月9日',
      author: '尹建伟,谭思危,于茗谦,卢丽强,尚永衡',
    },
    {
      title: '基于卷积实现可复用波形库加速量子波形编译的方法和装置',
      time: '2023年10月26日',
      author: '尹建伟,余加,田吴炜,卢丽强,贾星辉,谭思危,宋紫璇',
    },
    {
      title: '一种基于超导量子处理器的量子计算机平台',
      time: '2023年3月10日',
      author: '孙校,谭思危,贾星辉,王沭迪,卢丽强',
    },
    {
      title: '一种针对量子退火器求解3-SAT问题的噪音优化方法',
      time: '2023年1月9日',
      author: '尹建伟,谭思危,于茗谦,卢丽强,尚永衡',
    },
  ]
  const PatentsListEn = [
    {
      title:
        'A Noise Optimization Method to Quantum Annealing When Solving 3-SAT Problem',
      time: 'Jan 9th, 2023',
      author: 'Jianwei Yin, Siwei Tan, Mingqian Yu, Liqiang Lu, Yongheng Shang',
    },
    {
      title:
        'A Convolution-based Method to Accelerate the Pulse Generation of Quantum Circuit',
      time: 'Oct 26th, 2023',
      author:
        'Jianwei Yin, Jia Yu, Wuwei Tian, Liqiang Lu, Xinghui Jia, Siwei Tan, Zixuan Song',
    },
    {
      title:
        'A Quantum Computing Platform Based on Superconducting Quantum Processors',
      time: 'Mar 10th, 2023',
      author:
        'Xiao Sun, Siwei Tan, Xinghui Jia, Shudi Wang, Liqiang Lu, Jianwei Yin',
    },
    {
      title: 'A Visual Quantum Programming System',
      time: 'Jul 13th, 2023',
      author:
        'Jianwei Yin, Shudi Wang, Liqiang Lu, Yongheng Shang, Siwei Tan, Tingting Li, Xinghui Jia',
    },
  ]
  const [PatentsList, setPatentsListEn] = useState(PatentsListZh)
  // CopyrightList
  const CopyrightListZh = [
    {
      title: '太元量子云平台V1. 0',
      time: '2022年7月1日',
      author: '浙江大学',
    },
  ]
  const CopyrightListEn = [
    {
      title: 'Taiyuan Quantum Cloud Platform V1.0',
      time: 'Jul 1st, 2022',
      author: 'Zhejiang University',
    },
  ]
  const [CopyrightList, setCopyrightList] = useState(CopyrightListZh)
  // titlelist
  const titleListZh = ['论⽂', '专利', '软件著作权']
  const titleListEn = ['Papers', 'Patents', 'Software copyright']
  const [titleList, settitleList] = useState(titleListZh)
  useEffect(() => {
    if (lang === 'zh') {
      setPublicationsList(PublicationsListZh)
      setCopyrightList(CopyrightListZh)
      setPatentsListEn(PatentsListZh)
      settitleList(titleListZh)
    } else {
      setPublicationsList(PublicationsListEn)
      setCopyrightList(CopyrightListEn)
      setPatentsListEn(PatentsListEn)
      settitleList(titleListEn)
    }
  }, [lang])
  return (
    <div className={styles.root}>
      <HeaderImage />
      <Row justify={'center'}>
        <Col span={15}>
          <div className="publication_container">
            <div className="publication_title big_title"></div>
            <div className="Publications margin_top_80">
              <Title titleText={titleList[0]} />
              <div className="Publications_content margin_top_50">
                {PublicationsList.map((item, index) => (
                  <Link
                    key={index}
                    state={{ detail: item }}
                    to="/achievementDetail"
                    style={{ color: '#000' }}
                  >
                    <div key={index} className="Publications_item">
                      <div className="Publications_item_title">
                        {item.title}
                      </div>
                      <div className="Publications_item_author">
                        {item.author.map((item, index) => (
                          <span key={index} className="author">
                            {item},&nbsp;
                          </span>
                        ))}
                      </div>
                      <div className="Publications_item_place">
                        {item.place}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="Patents margin_top_80">
              <Title titleText={titleList[1]} />
              <div className="Patents_content margin_top_50">
                {PatentsList.map((item, index) => (
                  <div key={index} className="Patents_item Publications_item">
                    <div className="Patents_item_title Publications_item_title">
                      {item.title}
                    </div>
                    <div className="Patents_item_authon">{item.author}</div>
                    <div className="Patents_item_time">{item.time}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="Copyright margin_top_80">
              <Title titleText={titleList[2]} />
              <div className="Copyright_contetn margin_top_50">
                {CopyrightList.map((item, index) => (
                  <div key={index} className="Copyright_item Publications_item">
                    <div className="Copyright_item_title Publications_item_title">
                      {item.title}
                    </div>
                    <div className="Copyright_item_authon">{item.author}</div>
                    <div className="Copyright_item_time">{item.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
