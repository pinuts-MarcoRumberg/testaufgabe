import * as React from "react";
import * as Scrivito from "scrivito";

import "./PricingWidget.scss";

function PlanButton({ target, className }) {
  const text = target && target.title();

  return (
    <Scrivito.LinkTag
      to={target}
      className={`pricing-widget-chart--btn btn ${className}`}
    >
      {text}
      <i className="fa fa-angle-right fa-4" aria-hidden="true" />
    </Scrivito.LinkTag>
  );
}

Scrivito.provideComponent("PricingWidget", ({ widget }) => {
  const currency = widget.get("currency") || "$";

  return (
    <div className="row pricing-widget">
      <div className="col-lg-4">
        <div className="pricing-widget-chart first">
          <Scrivito.ContentTag
            content={widget}
            attribute="smallPlanName"
            className="pricing-widget-chart--plan-name"
          />
          <div className="pricing-widget-chart--quantity">
            <span className="dollar">{currency}</span>
            <Scrivito.ContentTag
              content={widget}
              attribute="smallPlanPrice"
              className="price"
              tag="span"
            />
            <Scrivito.ContentTag
              content={widget}
              attribute="smallPlanPeriod"
              className="period"
              tag="span"
            />
          </div>
          <Scrivito.ContentTag
            content={widget}
            attribute="smallPlanSpecs"
            className="pricing-widget-chart--specs"
          />
          <PlanButton
            target={widget.get("smallPlanButton")}
            className="btn-light"
          />
        </div>
      </div>

      <div className="col-lg-4">
        <div className="pricing-widget-chart featured">
          <Scrivito.ContentTag
            content={widget}
            attribute="mediumPlanName"
            className="pricing-widget-chart--plan-name"
          />
          <div className="pricing-widget-chart--quantity">
            <span className="dollar">{currency}</span>
            <Scrivito.ContentTag
              content={widget}
              attribute="mediumPlanPrice"
              className="price"
              tag="span"
            />
            <Scrivito.ContentTag
              content={widget}
              attribute="mediumPlanPeriod"
              className="period"
              tag="span"
            />
          </div>
          <Scrivito.ContentTag
            content={widget}
            attribute="mediumPlanSpecs"
            className="pricing-widget-chart--specs"
          />
          <PlanButton
            target={widget.get("mediumPlanButton")}
            className="btn-primary"
          />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="pricing-widget-chart last">
          <Scrivito.ContentTag
            content={widget}
            attribute="largePlanName"
            className="pricing-widget-chart--plan-name"
          />
          <div className="pricing-widget-chart--quantity">
            <span className="dollar">{currency}</span>
            <Scrivito.ContentTag
              content={widget}
              attribute="largePlanPrice"
              className="price"
              tag="span"
            />
            <Scrivito.ContentTag
              content={widget}
              attribute="largePlanPeriod"
              className="period"
              tag="span"
            />
          </div>
          <Scrivito.ContentTag
            content={widget}
            attribute="largePlanSpecs"
            className="pricing-widget-chart--specs"
          />
          <PlanButton
            target={widget.get("largePlanButton")}
            className="btn-light"
          />
        </div>
      </div>
    </div>
  );
});
