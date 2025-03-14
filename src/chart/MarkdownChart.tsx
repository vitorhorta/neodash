
import React from 'react';
import { ChartProps } from './Chart';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { replaceDashboardParameters } from './util/ChartUtils';

/**
 * Renders Markdown text provided by the user.
 */
const NeoMarkdownChart = (props: ChartProps) => {
    // Records are overridden to be a single element array with a field called 'input'.
    const records = props.records;
    const parameters = props.parameters ? props.parameters : {};
    const replaceGlobalParameters = props.settings && props.settings.replaceGlobalParameters !== undefined ? props.settings.replaceGlobalParameters : false;
    const markdown = records[0]["input"];
    const modifiedMarkdown = replaceGlobalParameters ? replaceDashboardParameters(markdown, parameters) : markdown;
    return <div style={{marginTop: "0px", marginLeft: "15px", marginRight: "15px", marginBottom: "0px"}}>
        <base target="_blank"/> <ReactMarkdown plugins={[gfm]} children={modifiedMarkdown} />
    </div >;
}

export default NeoMarkdownChart;