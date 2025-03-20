import { Command } from "@oclif/core";
import ora from "ora";
export default class Create extends Command {
    static args: {};
    static description: string;
    static examples: string[];
    static flags: {};
    run(): Promise<void>;
}
export declare const isOutputDirectoryEmpty: (outputFolder: string) => Promise<void>;
export declare const loading: (message: string) => ora.Ora;
