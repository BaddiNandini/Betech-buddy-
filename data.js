const SUBJECTS = [
  {
    "code": "SS",
    "name": "Signals and Systems",
    "units": [
      {
        "name": "Introduction to Signals and Systems",
        "topics": [
          "Classification of signals and systems",
          "Basic signal operations",
          "Time shifting, scaling and reversal",
          "Amplitude shifting and scaling",
          "Elementary signals",
          "Orthogonal signals and signal approximation",
          "Mean square error and orthogonality"
        ]
      },
      {
        "name": "Fourier Series and Fourier Transform",
        "topics": [
          "Fourier Series representation",
          "Trigonometric and exponential Fourier Series",
          "Dirichlet conditions",
          "Fourier Transform and properties",
          "Standard Fourier Transform pairs",
          "Impulse and signum transforms",
          "Hilbert Transform"
        ]
      },
      {
        "name": "Analysis of Linear Systems",
        "topics": [
          "Linear and nonlinear systems",
          "Impulse response",
          "LTI and LTV systems",
          "Convolution integral",
          "Graphical convolution",
          "Transfer function",
          "LPF, HPF and BPF",
          "Causality and stability"
        ]
      },
      {
        "name": "Correlation and Sampling",
        "topics": [
          "Autocorrelation and cross-correlation",
          "Correlation properties",
          "Energy and power spectral density",
          "Parseval's theorem",
          "Signal detection in noise",
          "Sampling theorem and proof",
          "Impulse, natural and flat-top sampling",
          "Reconstruction and aliasing",
          "Bandpass sampling"
        ]
      },
      {
        "name": "Laplace and Z-Transforms",
        "topics": [
          "Introduction to Laplace Transform",
          "Region of Convergence (ROC)",
          "Properties of ROC",
          "Inverse Laplace Transform",
          "Laplace and Fourier relationship",
          "Introduction to Z-Transform",
          "Z-Transform ROC and properties",
          "Inverse Z-Transform",
          "Comparison of Laplace, Fourier and Z-Transforms"
        ]
      }
    ]
  },
  {
    "code": "PTSP",
    "name": "Probability Theory and Stochastic Processes",
    "units": [
      {
        "name": "Probability and Random Variables",
        "topics": [
          "Experiments, sample spaces and events",
          "Probability axioms and conditional probability",
          "Bayes' theorem and independence",
          "Discrete, continuous and mixed random variables",
          "PDF and CDF",
          "Binomial, Poisson, Uniform, Gaussian, Exponential and Rayleigh distributions"
        ]
      },
      {
        "name": "Operations on Single and Multiple Random Variables",
        "topics": [
          "Expectation and functions of random variables",
          "Moments, variance and skewness",
          "MGF and characteristic functions",
          "Transformations of random variables",
          "Joint, marginal and conditional distributions",
          "Independence and sums of random variables",
          "Jointly Gaussian random variables"
        ]
      },
      {
        "name": "Random Processes",
        "topics": [
          "Temporal characteristics and classification",
          "Stationarity and statistical independence",
          "SSS and WSS processes",
          "Time averages and ergodicity",
          "Mean and autocorrelation",
          "Cross-correlation and Gaussian processes",
          "System response to random processes"
        ]
      },
      {
        "name": "Spectral Characteristics",
        "topics": [
          "Power spectral density and properties",
          "Relation between PSD and autocorrelation",
          "Cross power spectral density",
          "Spectral characteristics of system response",
          "Input and output PSD"
        ]
      },
      {
        "name": "Noise and Information Theory",
        "topics": [
          "Thermal and resistive noise",
          "Noise temperature and equivalent noise bandwidth",
          "Narrowband and white noise",
          "Entropy and information rate",
          "Huffman and Shannon-Fano coding",
          "Mutual information and channel capacity",
          "Shannon-Hartley law and bandwidth-SNR trade-off"
        ]
      }
    ]
  },
  {
    "code": "EDC",
    "name": "Electronic Devices and Circuits",
    "units": [
      {
        "name": "Semiconductor Physics and Diodes",
        "topics": [
          "Mobility and conductivity",
          "Intrinsic and extrinsic semiconductors",
          "Hall effect",
          "PN junction diode",
          "Diode characteristics"
        ]
      },
      {
        "name": "Special Semiconductor Devices and Diode Circuits",
        "topics": [
          "Zener diode, LED and photodiode",
          "SCR and UJT",
          "Clipping and clamping circuits",
          "Rectifiers and filters",
          "Ripple factor"
        ]
      },
      {
        "name": "Transistor Characteristics and Biasing",
        "topics": [
          "CB, CE and CC configurations",
          "Transistor current components",
          "Ebers-Moll model",
          "Transistor biasing methods",
          "Stability and thermal runaway"
        ]
      },
      {
        "name": "Small Signal BJT Amplifiers",
        "topics": [
          "Two-port networks",
          "Hybrid parameters",
          "h-parameter analysis",
          "CB, CE and CC amplifier analysis"
        ]
      },
      {
        "name": "FET, MOSFET and CMOS Amplifiers",
        "topics": [
          "JFET characteristics",
          "MOSFET characteristics",
          "PMOS and CMOS",
          "Common-source and common-gate amplifiers",
          "Source follower"
        ]
      }
    ]
  },
  {
    "code": "STLD",
    "name": "Switching Theory and Logic Design",
    "units": [
      {
        "name": "Number Systems, Codes and Boolean Logic",
        "topics": [
          "Number-system conversions",
          "1's and 2's complements",
          "Gray, BCD, Excess-3 and other codes",
          "Parity and Hamming codes",
          "Boolean algebra and De Morgan's laws",
          "Logic gates and universal gates",
          "SOP, POS, NAND-NAND and NOR-NOR"
        ]
      },
      {
        "name": "Minimization and Combinational Circuits",
        "topics": [
          "Karnaugh maps up to six variables",
          "Quine-McCluskey method",
          "Adders and subtractors",
          "BCD and Excess-3 adder",
          "Carry look-ahead adder",
          "Code converters"
        ]
      },
      {
        "name": "MSI, LSI and PLDs",
        "topics": [
          "Encoders and decoders",
          "Multiplexers and demultiplexers",
          "Priority encoder",
          "Magnitude comparator",
          "Seven-segment decoder",
          "PROM, PAL and PLA",
          "Boolean-function realization"
        ]
      },
      {
        "name": "Sequential Circuits I",
        "topics": [
          "Synchronous and asynchronous circuits",
          "NAND and NOR latches",
          "RS, JK, T and D flip-flops",
          "Truth and excitation tables",
          "Flip-flop conversions",
          "Ripple and synchronous counters",
          "Johnson and ring counters",
          "Registers and shift registers",
          "Common digital ICs"
        ]
      },
      {
        "name": "Sequential Circuits II",
        "topics": [
          "Finite-state machines",
          "State diagrams and state tables",
          "State reduction",
          "Analysis of clocked sequential circuits",
          "Mealy and Moore machines",
          "Sequence generators and detectors",
          "Overlapping and non-overlapping sequences"
        ]
      }
    ]
  },
  {
    "code": "HV",
    "name": "Universal Human Values",
    "units": [
      {
        "name": "Introduction to Value Education",
        "topics": [
          "Right understanding, relationship and physical facility",
          "Need for value education",
          "Self-exploration and natural acceptance",
          "Happiness and prosperity",
          "Basic human aspirations",
          "Human consciousness"
        ]
      },
      {
        "name": "Harmony in the Human Being",
        "topics": [
          "Co-existence of self and body",
          "Needs of self and body",
          "Body as an instrument",
          "Harmony in the self",
          "Sources of imagination",
          "Self-regulation and health"
        ]
      },
      {
        "name": "Harmony in Family and Society",
        "topics": [
          "Family as the basic unit",
          "Trust and respect",
          "Feelings in relationships",
          "Justice in relationships",
          "Harmony in society",
          "Universal human order"
        ]
      },
      {
        "name": "Harmony in Nature and Existence",
        "topics": [
          "Harmony in nature",
          "Interconnectedness and mutual fulfilment",
          "Four orders in nature",
          "Self-regulation in nature",
          "Coexistence and holistic harmony"
        ]
      },
      {
        "name": "Implications of Holistic Understanding",
        "topics": [
          "Natural acceptance of human values",
          "Ethical human conduct",
          "Humanistic education and universal order",
          "Professional ethics",
          "Holistic technologies and production systems",
          "Value-based life and profession"
        ]
      }
    ]
  }
];
