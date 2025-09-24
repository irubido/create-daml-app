// Generated from Setup.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg671ba5c19c9df53e9d1d3025b3edb2186a687b1a75331e88a1119bfaed27fd4b from '@daml.js/daml-script-2.10.2';

export declare type TestUser = {
  alias: string;
  public: damlTypes.Party;
  participantName: damlTypes.Optional<pkg671ba5c19c9df53e9d1d3025b3edb2186a687b1a75331e88a1119bfaed27fd4b.Daml.Script.ParticipantName>;
};

export declare const TestUser:
  damlTypes.Serializable<TestUser> & {
  }
;


export declare type Parties = {
  alice: damlTypes.Party;
  bob: damlTypes.Party;
  charlie: damlTypes.Party;
  public: damlTypes.Party;
};

export declare const Parties:
  damlTypes.Serializable<Parties> & {
  }
;

