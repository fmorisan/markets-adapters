/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface UniswapFactoryInterface extends Interface {
  functions: {
    createExchange: TypedFunctionDescription<{
      encode([token]: [string]): string;
    }>;

    exchangeTemplate: TypedFunctionDescription<{ encode([]: []): string }>;

    getExchange: TypedFunctionDescription<{
      encode([token]: [string]): string;
    }>;

    getToken: TypedFunctionDescription<{
      encode([exchange]: [string]): string;
    }>;

    getTokenWithId: TypedFunctionDescription<{
      encode([token_id]: [BigNumberish]): string;
    }>;

    initializeFactory: TypedFunctionDescription<{
      encode([template]: [string]): string;
    }>;

    tokenCount: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    NewExchange: TypedEventDescription<{
      encodeTopics([token, exchange]: [string | null, string | null]): string[];
    }>;
  };
}

export class UniswapFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): UniswapFactory;
  attach(addressOrName: string): UniswapFactory;
  deployed(): Promise<UniswapFactory>;

  on(event: EventFilter | string, listener: Listener): UniswapFactory;
  once(event: EventFilter | string, listener: Listener): UniswapFactory;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): UniswapFactory;
  removeAllListeners(eventName: EventFilter | string): UniswapFactory;
  removeListener(eventName: any, listener: Listener): UniswapFactory;

  interface: UniswapFactoryInterface;

  functions: {
    createExchange(
      token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    exchangeTemplate(): Promise<string>;

    getExchange(token: string): Promise<string>;

    getToken(exchange: string): Promise<string>;

    getTokenWithId(token_id: BigNumberish): Promise<string>;

    initializeFactory(
      template: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokenCount(): Promise<BigNumber>;
  };

  createExchange(
    token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  exchangeTemplate(): Promise<string>;

  getExchange(token: string): Promise<string>;

  getToken(exchange: string): Promise<string>;

  getTokenWithId(token_id: BigNumberish): Promise<string>;

  initializeFactory(
    template: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  tokenCount(): Promise<BigNumber>;

  filters: {
    NewExchange(token: string | null, exchange: string | null): EventFilter;
  };

  estimate: {
    createExchange(token: string): Promise<BigNumber>;

    exchangeTemplate(): Promise<BigNumber>;

    getExchange(token: string): Promise<BigNumber>;

    getToken(exchange: string): Promise<BigNumber>;

    getTokenWithId(token_id: BigNumberish): Promise<BigNumber>;

    initializeFactory(template: string): Promise<BigNumber>;

    tokenCount(): Promise<BigNumber>;
  };
}
