import { merge } from 'lodash';
import { resolvers as personResolvers } from './resources/person/person.resolvers';
import { resolvers as partyResolvers } from './resources/party/party.resolvers';
import { resolvers as deputeResolvers } from './resources/depute/depute.resolvers';
import { resolvers as lawProjectResolvers } from './resources/lawProject/lawProject.resolvers';
import { resolvers as CommissionResolvers } from './resources/commission/commission.resolvers';
import { resolvers as tokenResolvers } from './resources/token/token.resolver';

const resolvers = merge(
  personResolvers,
  partyResolvers,
  CommissionResolvers,
  deputeResolvers,
  lawProjectResolvers,
  tokenResolvers,
);

export default resolvers;
