export declare const availablePackages: {
    hardhat: string;
    "react-app": string;
    subgraphs: string;
};
export declare const packageNameMap: {
    hardhat: string;
    "react-app": string;
    subgraphs: string;
};
export declare const BASE_URL = "https://github.com/vtamara/celo-composer/";
export declare const getProjectJson: (projectName: string, author: string) => {
    author: string;
    bugs: {
        url: string;
    };
    description: string;
    homepage: string;
    keywords: string[];
    license: string;
    name: string;
    private: boolean;
    repository: {
        type: string;
        url: string;
    };
    resolutions: {
        "@wagmi/connectors": string;
        "@wagmi/core": string;
        "@walletconnect/utils": string;
        elliptic: string;
        viem: string;
        wagmi: string;
    };
    scripts: {};
    version: string;
    workspaces: string[];
};
export declare const getTemplateUrl: (template: string) => "https://github.com/celo-org/minipay-template.git" | "https://github.com/celo-org/valora-template.git";
export declare const displayInstructions: () => void;
