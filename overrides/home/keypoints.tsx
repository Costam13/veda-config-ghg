import React from "$veda-ui/react";
import styled from "$veda-ui/styled-components";
import { glsp, media } from "$veda-ui/@devseed-ui/theme-provider";
import Hug from "$veda-ui-scripts/styles/hug";
import {
  Card,
  CardList,
  CardFooter,
} from "$veda-ui-scripts/components/common/card";

import { ArrowLink } from "./arrow-link";

import { DATASETS_PATH } from "$veda-ui-scripts/utils/routes";
import { Actions } from "$veda-ui-scripts/components/common/browse-controls/use-browse-controls";

import featureEmissions from "./media/refinery.png";
import featureSources from "./media/swamp.png";
import featureMethane from "./media/plume.png";

const KeypointsWrapper = styled(Hug)`
  padding: ${glsp(1, 0)};
  grid-column: content-start / content-end;

  ${CardFooter} {
    margin-top: auto;
  }
`;

const KeypointCard = styled(Card)`
  ${media.mediumUp`
    font-size: 1.125rem;
  `}
`

export default function Keypoints() {
  return (
    <KeypointsWrapper>
      <CardList>
        <li>
          <KeypointCard
            linkLabel="View more"
            linkTo="/stories/us-methane-sources"
            title="Gridded Anthropogenic Greenhouse Gas Emissions"
            description="Emission estimates from human activities including the energy, agriculture, waste, and industry sectors"
            imgSrc={featureEmissions}
            imgAlt="image of oil refinery"
            footerContent={
              <div>
                <ArrowLink
                  to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
                    JSON.stringify({ Topics: "anthropogenic-emissions" })
                  )}`}
                >
                  Check out relevant datasets
                </ArrowLink>
              </div>
            }
          />
        </li>
        <li>
          <KeypointCard
            linkLabel="View more"
            linkTo="/stories/tracking-greenhouse-gas-cycles"
            title="Natural Greenhouse Gas Sources and Sinks"
            description="Naturally-occurring greenhouse gas fluxes from land, ocean, and atmosphere"
            imgSrc={featureSources}
            imgAlt="image of green wetlands"
            footerContent={
              <div>
                <ArrowLink
                  to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
                    JSON.stringify({ Topics: "natural-emissions-and-sinks" })
                  )}`}
                >
                  Check out relevant datasets
                </ArrowLink>
              </div>
            }
          />
        </li>
        <li>
          <KeypointCard
            linkLabel="View more"
            linkTo="/stories/discovering-large-methane-emissions"
            title="New Observations for Tracking Large Emission Events"
            description="Identify and quantify large methane leak events leveraging aircraft and space-based data"
            imgSrc={featureMethane}
            imgAlt="image of colorful polygon against satellite landscape surface in brown"
            footerContent={
              <div>
                <ArrowLink
                  to={`${DATASETS_PATH}?${Actions.TAXONOMY}=${encodeURIComponent(
                    JSON.stringify({ Topics: "large-emission-events" })
                    )}`}
                    >
                  Check out relevant datasets
                </ArrowLink>
              </div>
            }
          />
        </li>
      </CardList>
    </KeypointsWrapper>
  );
}
